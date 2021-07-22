import log from './utils/log/index'
import pkg from '../package.json'

try {
  check()
} catch(e) {
  throw new Error(e)
}

function check() {
  // 检查当前版本
  checkPkgVersion()
  // 检查node版本
}


function checkPkgVersion() {
  log.success('欢迎使用Antenta-CLI脚手架')
  log.notice('Antenta-CLI', pkg.version)
}


