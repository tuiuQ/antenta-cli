import log from '../log'
import pkg from '../../../package.json'
import semver from 'semver'
import colors from 'colors'
import { getNpmLastVersion } from '../npm'


async function check() {
  // 检查当前版本
  checkPkgVersion()
  // 检查node版本
  checkNodeVersion()
  await checkGlobalUpdate()
}

async function checkGlobalUpdate() {
  const currentVersion = pkg.version
  const name = pkg.name
  const latestVersion = await getNpmLastVersion(currentVersion, 'antenta-ui')
  if (latestVersion && semver.gt(latestVersion, '1.0.6')) {
    log.warn(
      '更新提醒',
      colors.yellow(
        `${name}可更新，当前版本为${currentVersion}，最新版本为${latestVersion}`
      )
    )
  }
}

function checkNodeVersion() {
  log.notice('NodeJS', process.version)
  if (!semver.satisfies(process.version, pkg.engines.node)) {
    throw new Error(
      colors.red(
        `node版本规定为${pkg.engines.node}，你当前版本为${process.version}`
      )
    )
  }
}

function checkPkgVersion() {
  log.success('欢迎使用Antenta-CLI脚手架')
  log.notice('Antenta-CLI', `v${pkg.version}`)
}

export {
  check
}