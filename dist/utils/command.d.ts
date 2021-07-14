import { pkg } from "../typings/commander";
import execa from "execa";
export declare function installPkg(pkgTool: pkg, cwd: string): Promise<void>;
export declare function exec(command: string, options: execa.Options): Promise<unknown>;
