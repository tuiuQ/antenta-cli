import check from './check'
import registerCommand from './command'
import { log } from '@antenta/cli-utils'

async function cli() {
  try {
    await check()
    registerCommand()
  } catch (e) {
    log.error('❌❌❌', '项目出错啦')
    throw new Error(e)
  }
}

cli()