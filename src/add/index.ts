import addComponents from './components'
import addDirectives from './directives'
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
  .option('-t, --tsx', '是否使用tsx')
  .action(addDirectives)

export default generate