import del from 'del'
import { src, dest, watch, series, task } from 'gulp'
import gts from 'gulp-typescript'

const outputDir = 'lib'

function clean(): Promise<string[]> {
	return del(outputDir)
}

function script(): NodeJS.ReadWriteStream {
	return src("./src/**/*.ts", { base: 'src' })
		.pipe(gts.createProject('tsconfig.json')())
		.pipe(dest(outputDir))
}


task('watch', () => {
	series(clean, script)
	watch('./src/**/*.ts', series(script))
})
