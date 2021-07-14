import {promisify} from "util";
import download from "download-git-repo";
import {readdirSync, statSync} from "fs-extra";

interface FileItem {
  file: string;
  isDir: boolean;
}

const downloadTemplate = promisify<string, string, { clone: true }>(download)

export function downloadTemplates (projectName: string, tool: string = 'webpack'): Promise<boolean | ErrorConstructor> {
  return downloadTemplate(
    `direct:https://gitee.com/tuiu/antenta-cli-template.git#${tool}`,
    projectName,
    { clone: true }
  ).then(() => {
    return Promise.resolve(true)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

export function recursiveDir (sourceDir: string): Array<FileItem> {
  const res: Array<FileItem> = []
  function traverse(dir: string) {
    readdirSync(dir).forEach((file: string) => {
      const pathname = `${dir}/${file}`
      const isDir = statSync(pathname).isDirectory()
      res.push({
        file: pathname,
        isDir
      })
      if (isDir) {
        traverse(pathname)
      }
    })
  }
  traverse(sourceDir)
  return res
}
