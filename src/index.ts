import { registerCommand } from "./core"
import { check } from "./utils/before"

export async function cli () {
  try {
    await check()
    registerCommand()
  } catch(e) {
    throw new Error(e)
  }
}




