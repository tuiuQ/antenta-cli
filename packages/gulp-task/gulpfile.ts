import { series } from 'gulp'
import { clean, script } from './src'

export default series(clean, script)