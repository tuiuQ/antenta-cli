import { Command } from "commander";
import pkg from '../package.json'

const program = new Command("an-cli")

program
  .version(`an-cli ${pkg.version}`)


program
  .command('create <projectName>')
  .description('create a new project by an-cli')
  .option('-i, --install', 'is auto install library', false)
  .option('-t, --tool [value]', '选择构建包')
  .action((projectName: string): void => {
    console.log(`projectName`, projectName)
  })

program
  .command('init')
  .option('')