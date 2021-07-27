import artTemplate from "art-template"
import { outputFileSync } from "fs-extra"
import { kebabCase } from "lodash"
import { join } from 'path'
import colors from 'colors'

export default (name: string, options: { tsx: boolean }) => {
  let basePath = 'components'
  let trueName = name
  const data = name.split('/')
  if (data.length > 1) {
    trueName = data.pop() as string
    basePath = data.join('/')
  }
  let suffix = '.vue'
  if (options.tsx) {
    suffix = '.tsx'
  }
  console.log(suffix)
  try {
    const content = artTemplate(
      join(__dirname, '../../../templates', 'component' + suffix),
      { name: trueName, rootCls: kebabCase(trueName) }
    )
    const dest = `src/${basePath}/${trueName}${suffix}`
    console.log(dest)
    outputFileSync(dest, content)
    console.log(colors.green('创建成功>>> ' + dest))
  } catch (e) {
    console.log(colors.red('创建失败'))
    throw e
  }
}