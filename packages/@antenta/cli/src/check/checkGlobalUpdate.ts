import { log } from "@antenta/cli-utils"
import pkg from '../../package.json'

export default async () => {
  log.notice('检查', '检查antenta-cli最新版本')
  const currentVersion = pkg.version
  const lastVersion = ''
}