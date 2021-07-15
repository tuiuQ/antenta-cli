import { log } from "@antenta/cli-utils"
import pkg from '../../package.json'

export default () => {
  log.notice('当前版本', `an-cli v${pkg.version}`)
  log.success('欢迎使用antenta-cli脚手架')
}