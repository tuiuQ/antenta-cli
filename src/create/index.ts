import clear from 'clear'
import { CreateOptions } from 'src/types/data-types'
import inquirer from '../utils/inquirer'
import ora from 'ora'
import colors from 'colors'
import { promisify } from 'util'
import download from 'download-git-repo'
import { hasYarn, recursiveDir } from '../utils'
import { partition } from 'lodash'
import template from 'art-template'
import { unlinkSync, writeFileSync } from 'fs-extra'
import exec from '../utils/exec'

const spinner = ora()

async function create (projectName: string, options?: CreateOptions) {
  clear()
  console.log(colors.blue(' Antenta CLI'))
  const { isInstall, tool, pkgTool } = await prepare(projectName, options)

  const cwd = './' + projectName 
  if (isInstall) {
    installTemplate(<'npm' | 'yarn'>pkgTool, cwd)
  }
}


async function prepare (projectName: string, options?: CreateOptions) {
  const isInstall = options?.install || await inquirer({
    type: 'confirm',
    message: '是否自动安装依赖?',
    default: false
  })
  const tool = options?.tool || await inquirer({
    type: 'list',
    message: '选择构建工具',
    choices: [
      {
        name: 'Webpack-vue',
        value: 'webpack-vue'
      },
      {
        name: 'Rollup',
        value: 'rollup'
      },
      {
        name: 'Webpack-tsx',
        value: 'webpack-tsx'
      }
    ],
    default: 'webpack-tsx'
  })
  const pkgTool = options?.packageTool || await inquirer({
    type: 'list',
    message: '选择包管理工具',
    choices: ['yarn', 'npm'],
    default: 'npm'
  })

  spinner.start('拉取模版中...')
  await downloadTemplate(projectName, tool as string)

  const allFiles = recursiveDir(projectName)
  partition(allFiles, 'isDir')[1].forEach(item => {
    const content = template(process.cwd() + '/' + item.file, { projectName })
    let dest = item.file
    if (dest.includes('.art')) {
      unlinkSync(dest)
      dest = dest.replace(/\.art/, '')
    }
    writeFileSync(dest, content)
  })
  return {
    isInstall,
    tool,
    pkgTool
  }
}

async function installTemplate (pkgTool: 'npm' | 'yarn', cwd: string) {
  let tool = pkgTool
  if (!tool) {
    tool = await inquirer({
      type: 'list',
      choices: ['npm', 'yarn'],
      default: 'npm',
      message: 'npm or yarn ?'
    }) as 'npm' | 'yarn'
  }
  if (tool === 'yarn' && !hasYarn()) {
    console.log(colors.red('请先安装yarn'))
  } else {
    spinner.start(colors.blue('正在安装依赖...'))
    await exec(`${tool} install`, { cwd })
    spinner.succeed(colors.green('项目创建成功'))
  }
}


async function downloadTemplate(projectName: string, branch: string) {

  const clone = promisify<string, string, { clone: boolean }>(download)

  try {
    await clone(
      `direct:https://gitee.com/tuiu/antenta-cli-template.git#${branch}`,
      projectName,
      { clone: true }
    )
    spinner.succeed('拉取模版成功')
  } catch(e) {
    throw new Error(e)
  }
}

export default create