import { Command } from "commander";
import figlet from "figlet";
import pkg from '../package.json'
import log from 'npmlog'
import chalk from "chalk";

const program = new Command("an-cli")

program
  .version(`an-cli ${pkg.version}`)

program
  .command('version')
  .action(() => {
    figlet('antenta-cli', (err, data) => {
      console.log(chalk.red(data)) 
    })
    log.headers = 'antenta-cli'
    log.addLevel('success', 2000, { fg: 'green', bold: true })
    log.success(`🙆 an-cli v${pkg.version}`)
  })

program
  .command('create <projectName>')
  .description('创建新项目')
  .option('-i, --install', '是否自动安装依赖', false)
  .option('-t, --tool [value]', '选择安装依赖的包管理工具(默认npm)', 'npm')
  .action((projectName: string): void => {
    console.log(`projectName`, projectName)
  })


program.parse(process.argv)

