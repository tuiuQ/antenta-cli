import semver from "semver"
import { log } from "@antenta/cli-utils"
import pkg from '../../package.json'

export default () => {
  if (!semver.satisfies(process.version, pkg.engines.node, { includePrerelease: true })) {
    log.info('NodeJS', `你的NodeJS版本为${process.version}，但是antenta-cli需要${pkg.engines.node}, 请升级你的节点`)
    process.exit(1)
  }
}