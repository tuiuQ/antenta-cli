import { CreateOptions } from "../typings/commander";
import ora from 'ora'
import chalk from 'chalk'
import { partition } from 'lodash'
import template from 'art-template'
import { downloadTemplates, recursiveDir, installPkg, addLibrary, generateMain } from '../utils'
import { unlinkSync, writeFileSync } from "fs-extra";
import inquirer from 'inquirer'
import { installQues, pkgToolQues, libraryQues } from '../inquirer'
import { libraryTypes } from "../typings/types";

export default function (projectName: string, options: CreateOptions) {

  const spinner = ora(chalk.blue('开始下载模版...\n')).start()
  downloadTemplates(projectName).then(async () => {
    spinner.succeed(chalk.green('下载成功'))
    spinner.start(chalk.blue('初始化模版...\n'))
    const allFiles = recursiveDir(projectName)
    partition(allFiles, 'isDir')[1].forEach(item => {
      const cwd = `${process.cwd()}/${item.file}`
      if (!/\.(jpg|png|gif|woff)$/.test(item.file)) {
        try {
          const content = template(cwd, {
            projectName,
            name: projectName
          })
          let dest = item.file
          if (dest.includes('.art')) {
            unlinkSync(dest)
            dest = dest.replace(/\.art/, '')
          }
          writeFileSync(dest, content)
        } catch (err) {
          spinner.fail(chalk.red('非法模版，请切换模版'))
        }
      }
    })
    spinner.succeed(chalk.green('初始化模版成功\n'))

    const cwd = './' + projectName
    if (options.install) {
      await installPkg(options.pkgTool, cwd)
    } else {
      const answers = await inquirer.prompt([
        libraryQues,
        installQues,
        {
          ...pkgToolQues,
          when (currentAnswers) {
            return currentAnswers.install && !options.pkgTool
          }
        }
      ])
      answers.library.forEach((item: libraryTypes) => {
        addLibrary(item, cwd)
      })
      generateMain(answers.library, cwd)
      if (answers.install) {
        await installPkg(answers.pkgTool || options.pkgTool, cwd)
      } else {
        spinner.succeed(chalk.green("项目创建成功\n"))
      }
    }
  }).catch(err => {
    spinner.fail(chalk.red('创建项目失败\n'))
    throw err
  })
}
