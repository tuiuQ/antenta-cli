import del from 'del'
import { src, dest, series, watch, task } from 'gulp'
import gts from 'gulp-typescript'

const outputDir = 'lib'

function clean() {
	return del(outputDir)
}


function script() {
	return src('./src/**/*.ts', { base: 'src' })
		.pipe(gts.createProject('tsconfig.json')())
		.pipe(dest(outputDir))
}

function watchFile() {
	return watch("./src/**/*.ts", series(script))
}

task('watchFile', series(clean, watchFile))
export default series(clean, script)

