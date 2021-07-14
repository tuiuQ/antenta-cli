import { libraryTypes } from "../typings/types";
import { readFileSync } from "fs";
import { libraryInfo } from "../inquirer";
import { writeFileSync } from "fs-extra";
import render from 'json-templater/string'
import { kebabCase } from "lodash"
import { EOL } from 'os'
import templates from '../../templates/templater'

export async function addLibrary(library: libraryTypes, projectName: string) {
  const cwd = `${projectName}/package.json`
  const content = readFileSync(cwd, 'utf-8')
  const pkg = JSON.parse(content)
  const lib = libraryInfo.filter(item => item.name === library)[0]
  pkg.dependencies[library] = lib.version
  lib.generate!()
  writeFileSync(cwd, JSON.stringify(pkg, null,"\t"))
}

export function generateMain(libraries: Array<libraryTypes>, projectName: string) {
  const cwd = `${projectName}/src/index.ts`
  const importTemplate: Array<string> = []
  const useTemplate: Array<string> = []

  libraries.forEach(library => {
    importTemplate.push(render(templates.IMPORT_TEMPLATE, {
      name: libraryInfo.filter(item => item.name === library)[0].alias,
      package: kebabCase(libraryInfo.filter(item => item.name === library)[0].alias)
    }))
    useTemplate.push(render(templates.USE_TEMPLATE, {
      name: libraryInfo.filter(item => item.name === library)[0].alias
    }))
  })

  const main = render(templates.MAIN_TEMPLATE, {
    import: importTemplate.join(EOL),
    use: useTemplate.join(EOL)
  })

  writeFileSync(cwd, main)
}
