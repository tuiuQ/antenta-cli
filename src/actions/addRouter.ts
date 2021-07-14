import template from "art-template";
import { join } from 'path'
import { outputFileSync } from "fs-extra";

export default function addRouter (): void {
  try {
    const content = template(
      join(__dirname, '../../templates', 'router.ts'), {}
    )
    const dest = `src/router/index.ts`
    outputFileSync(dest, content)
  } catch (err) {
    throw err
  }
}

