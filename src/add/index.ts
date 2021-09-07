import addComponents from './components'
import addDirectives from './directives'
import addPages from './pages'
import { Command } from 'commander'

const generate = new Command('add')

generate
  .command('c <name>')
  .description('添加组件')
  .option('-t, --tsx', '是否使用tsx')
  .action(addComponents)

generate
  .command('d <name>')
  .description('添加指令')
  .action(addDirectives)

generate
  .command('p <name>')
  .description('添加页面')
  .option('-t, --tsx', '是否使用tsx')
  .option('-j, --jian')
  .action(addPages)

export default generate
