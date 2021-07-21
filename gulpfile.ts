import gulp, { dest, src } from 'gulp'
import del from 'del'
import gts from 'gulp-typescript'

const outputDir = 'lib'


gulp.task('clean', () => del(outputDir))

gulp.task('script', () => {
  return src('./src/**/*.ts', { base: 'src' })
    .pipe(gts.createProject('./tsconfig.json')())
    .pipe(dest(outputDir))
})


gulp.task('watch', () => {
  gulp.watch('./src/**/*.ts', gulp.series('script'))
})

gulp.task('dev', gulp.series('clean', 'script', 'watch'))

gulp.task('build', gulp.series('clean', 'script'))
