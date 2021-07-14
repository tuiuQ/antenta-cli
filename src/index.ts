import { Command } from 'commander'
import create from './actions/create'

const program = new Command("an-cli")

program
  .command('create <projectName>')
  .description("创建项目")
  .option('-t --tool [value]', '选择构建工具', 'webpack')
  .option('-i --install', '是否安装依赖', false)
  .option('-pt --pkg-tool [value]', '选择要使用的包管理工具')
  .option('-l --library [value...]', '依赖')
  .action(create)

program
  .version(require('../package.json').version)
  .parse(process.argv)
