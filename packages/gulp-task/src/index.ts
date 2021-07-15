import del from 'del'
import { dest, src } from 'gulp'
import gts from 'gulp-typescript'

const Dir = 'lib'

export function clean(): Promise<string[]> {
  return del(Dir)
}

export function script(): NodeJS.ReadWriteStream {
  return src('./src/**/*.ts', { base: 'src' })
    .pipe(gts.createProject('tsconfig.json')())
    .pipe(dest(Dir))
}
