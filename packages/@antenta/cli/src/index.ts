import chalk from 'chalk'
import check from './check'
import registerCommand from './command'

async function cli() {
  try {
    await check()
    registerCommand()
  } catch (e) {
    throw new Error(chalk.red(''))
  }
}

cli()