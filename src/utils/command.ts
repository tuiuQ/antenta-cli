import {pkg} from "../typings/commander";
import inquirer from "inquirer";
import {libraryQues, pkgToolQues} from "../inquirer";
import ora from "ora";
import chalk from "chalk";
import execa from "execa";

export async function installPkg (pkgTool: pkg, cwd: string) {
  let tool = pkgTool
  if (!tool) {
    const answers = await inquirer.prompt([
      libraryQues,
      pkgToolQues
    ])
    tool = answers.pkgTool
  }
  const spinner = ora(chalk.blue('正在安装依赖...\n')).start()
  await exec(`${tool} install`, { cwd })
  spinner.succeed(chalk.green("项目创建成功\n"))
}


export async function exec(command: string, options: execa.Options) {
  return new Promise((resolve, reject) => {
    const subProcess = execa.command(command, options)
    subProcess.stdout!.pipe(process.stdout)
    subProcess.stdout!.on('close', resolve)
    subProcess.stdout!.on('error', reject)
  })
}
