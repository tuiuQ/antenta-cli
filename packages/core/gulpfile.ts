import { series } from "gulp";
import { clean, script } from "@antenta-cli/gulp-task" 

export default series(clean, script)