import semver from 'semver'
import axios  from 'axios'
import urlJoin from 'url-join'


function getRegistry(isOriginal: boolean = false): string {
  return isOriginal
    ? 'https://registry.npmjs.org'
    : 'https://registry.npm.taobao.org'
}


async function getSemverVersions(pkgName: string, registry?: string) {
  const register = registry || getRegistry()
  const url = urlJoin(register, pkgName)
  const result = await axios.get(url)
  if (result.status === 200 && result.data && result.data.versions) {
    return Object.keys(result.data.versions)
  }
  return []
}

function getRecentVersions(baseVersion: string, versions: Array<string>): Array<string> {
  return versions
    .filter((version) => semver.satisfies(version, `>=${baseVersion}`))
    .sort((a, b) => (semver.gte(b, a)) as unknown as number)
}

async function getNpmLastVersion (baseVersion: string, pkgName: string, registry?: string): Promise<string> {
  const versions = await getSemverVersions(pkgName, registry)
  let recentVersions = getRecentVersions(baseVersion, versions)
  if (recentVersions && recentVersions.length) {
    return recentVersions[0]
  }
  return ''
}

export {
  getSemverVersions,
  getNpmLastVersion
}