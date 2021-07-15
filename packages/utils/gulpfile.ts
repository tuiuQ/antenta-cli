import { clean, script } from '@antenta-cli/gulp-task'
import { series } from 'gulp'

export default series(clean, script)