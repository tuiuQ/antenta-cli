import execa from 'execa';
import { readdirSync, statSync } from 'fs-extra'

interface FileItem {
  file: string;
  isDir: boolean;
}


function recursiveDir(sourceDir: string) {
  const res: FileItem[] = [];
  function traverse(dir: string) {
    readdirSync(dir).forEach((file: string) => {
      const pathname = `${dir}/${file}`; // temp/.gitignore
      const isDir = statSync(pathname).isDirectory();
      res.push({ file: pathname, isDir });
      if (isDir) {
        traverse(pathname);
      }
    })
  }
  traverse(sourceDir);
  return res;
}


function hasYarn (): boolean {
  try {
    execa.commandSync('yarn -v', { stdio: 'ignore' })
    return true
  } catch (e) {
    return false
  }
}

export {
  recursiveDir,
  hasYarn
}