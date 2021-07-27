import artTemplate from "art-template"
import { outputFileSync } from "fs-extra"
import { join } from 'path'
import colors from 'colors'

export default (name: string) => {
  let basePath = 'directives'
  let trueName = name
  const data = name.split('/')
  if (data.length > 1) {
    trueName = data.pop() as string
    basePath = data.join('/')
  }

  try {
    const content = artTemplate(
      join(__dirname, '../../../templates', 'directives.ts'),
      { name: trueName }
    )
    const dest = `src/${basePath}/${trueName}.ts`
    outputFileSync(dest, content)
    console.log(colors.green('创建成功>>> ' + dest))
  } catch(e) {
    console.log(colors.red('创建失败'));
    throw e;
  }
}