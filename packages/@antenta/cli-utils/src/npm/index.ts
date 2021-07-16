import urlJoin from 'url-join'
import axios from 'axios'
import log from '../log'
import semver from 'semver'
import { NpmInfo } from '../types/data-types'


/**
 * 获取registry
 * @param {Boolean} isOriginal [是否原生镜像源]
 * @returns {String} [返回镜像源]
 */
function getNpmRegistry(isOriginal: boolean = false): string {
  return isOriginal ? 'https://registry.npmjs.org' : 'https://registry.npm.taobao.org'
}

/**
 * 根据registy获取npm信息
 * @param {String} npm [包名]
 * @param {String} registry
 */
async function getNpmInfo(npm: string, registry?: string): Promise<NpmInfo> {
  const register = registry || getNpmRegistry()
  const url = urlJoin(register, npm)
  try {
    const response = await axios.get<NpmInfo>(url)
    return Promise.resolve(response.data)
  } catch (e) {
    return Promise.reject(e)
  }
}

/**
 * 获取npm包的最新版号
 * @param {String} npm [包名]
 * @param {String} registry 
 */
async function getLastVersion (npm: string, registry?: string): Promise<string> {
  try {
    const info = await getNpmInfo(npm, registry)
    if (!info['dist-tags'] || !info['dist-tags'].latest) {
      log.error('没有latest版本号', info.name)
      // return Promise.reject(new Error('Error：没有latest版本'))
    }
    const latestVersion = info['dist-tags'].latest
    return Promise.resolve(latestVersion)
  } catch (e) {
    return Promise.reject(e)
  }
}

/**
 * 获取npm的所有版本
 */
async function getVersions(npm: string, registry?: string): Promise<Array<string>> {
  try {
    const info = await getNpmInfo(npm, registry)
    const versions = Object.keys(info.versions)
    return Promise.resolve(versions)
  } catch (e) {
    return Promise.reject(new Error(e))
  }
}

/**
 * 根据指定的版本号获取semver规范的最新版本
 * @param {String} baseVersion 
 * @param {Array<String>} versions 
 * @returns {String}
 */
function getLastSemverVersion (baseVersion: string, versions: Array<string>): string {
  versions = versions
    .filter(version => semver.satisfies(version, '^' + baseVersion))
    .sort((a: string, b: string): any => {
      return semver.gt(b, a)
    })
  return versions[0]
} 



/**
 * 
 * @param {String} npm 
 * @param {String} baseVersion 
 * @param {String} registry 
 */
async function getNpmLastSemverVersion (npm: string, baseVersion: string, registry?: string): Promise<string> {
  try {
    const versions = await getVersions(npm, registry)
    const latestVersion = getLastSemverVersion(baseVersion, versions as Array<string>)
    return Promise.resolve(latestVersion)
  } catch (e) {
    return Promise.reject(e)
  }
}

export {
  getNpmRegistry,
  getNpmInfo,
  getLastVersion,
  getVersions,
  getLastSemverVersion,
  getNpmLastSemverVersion
}