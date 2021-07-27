declare function getSemverVersions(pkgName: string, registry?: string): Promise<string[]>;
declare function getNpmLastVersion(baseVersion: string, pkgName: string, registry?: string): Promise<string>;
export { getSemverVersions, getNpmLastVersion };
