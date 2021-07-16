import { NpmInfo } from '../types/data-types';
/**
 * 获取registry
 * @param {Boolean} isOriginal [是否原生镜像源]
 * @returns {String} [返回镜像源]
 */
declare function getNpmRegistry(isOriginal?: boolean): string;
/**
 * 根据registy获取npm信息
 * @param {String} npm [包名]
 * @param {String} registry
 */
declare function getNpmInfo(npm: string, registry?: string): Promise<NpmInfo>;
/**
 * 获取npm包的最新版号
 * @param {String} npm [包名]
 * @param {String} registry
 */
declare function getLastVersion(npm: string, registry?: string): Promise<string>;
/**
 * 获取npm的所有版本
 */
declare function getVersions(npm: string, registry?: string): Promise<Array<string>>;
/**
 * 根据指定的版本号获取semver规范的最新版本
 * @param {String} baseVersion
 * @param {Array<String>} versions
 * @returns {String}
 */
declare function getLastSemverVersion(baseVersion: string, versions: Array<string>): string;
/**
 *
 * @param {String} npm
 * @param {String} baseVersion
 * @param {String} registry
 */
declare function getNpmLastSemverVersion(npm: string, baseVersion: string, registry?: string): Promise<string>;
export { getNpmRegistry, getNpmInfo, getLastVersion, getVersions, getLastSemverVersion, getNpmLastSemverVersion };
