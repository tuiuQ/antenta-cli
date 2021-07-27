import execa from "execa";

export default (command: string, options: execa.Options) => {
  return new Promise((resolve, reject) => {
    const subProcess = execa.command(command, options)
    subProcess.stdout!.pipe(process.stdout)
    subProcess.stdout!.on('close', resolve)
    subProcess.stdout!.on('error', reject)
  })
}