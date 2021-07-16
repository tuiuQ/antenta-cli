import { Command } from 'commander'
import pkg from '../package.json'
import create from './actions/create'

const program = new Command('an-cli')

program
	.version(`an-cli v${pkg.version}`)
	.usage(`create <projectName> [options] `)

program
	.command('create <projectName>')
	.description("创建新项目")
	.option('-i, --install', '是否自动安装依赖', false)
	.option('-pt, --package-tool [value]', '选择构建的包管理工具(默认是npm)', 'npm')
	.action(create)

program.parse(process.argv)
