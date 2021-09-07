import { Command } from 'commander'
import pkg from '../../package.json'
import colors from 'colors'
import create from '../create'
import add from '../add'

function registerCommand() {
  const program = new Command('anc')

  program
    .version(pkg.version)
    .usage('<command> [options]')
    .addHelpText(
      'afterAll',
      `\n运行 ${colors.blue('anc <command> --help')} 获取有关命令的详细用法的帮助`
    )


  program
    .command('create <project-name>')
    .description('创建新项目')
    .option('-i, --install', '是否自动安装依赖')
    .option('-t, --tool [value]', '选择构建工具')
    .option('-pt, --packageTool [value]', '选择包管理工具')
    .action(create)

  program
    .addCommand(add)

  program.parse(process.argv)
}

export {
  registerCommand
}
