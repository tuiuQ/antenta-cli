import { src, dest, series } from 'gulp'
import del from 'del'
import gts from 'gulp-typescript'

const outputPath = 'dist'

function clean() {
  return del(outputPath)
}

function script() {
  return src('src/**/*.ts', { base: 'src' })
    .pipe(gts.createProject('tsconfig.json')())
    .pipe(dest(outputPath))
}


export default series(clean, script)
