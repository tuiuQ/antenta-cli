import { Command } from 'commander'
import { log } from '@antenta-cli/utils'
import pkg from '../package.json'

const program = new Command()

async function cli() {
  try {
    await prepare()
  } catch (err) {
    log.error('antenta-cli', '🙅错误')
  }
}

cli()


async function prepare() {
  checkPkgVersion()   // 检查当前版本
}

function checkPkgVersion () {
  log.notice('cli', pkg.version)
  log.success('欢迎使用antenta-cli脚手架')
}

export default cli