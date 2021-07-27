function download(
  repo: string,
  dest: string,
  opts: { clone: boolean },
  callback: (err?: string) => void
): void

function download(
  repo: string,
  dest: string,
  callback: (err?: string) => void
): void

declare module "download-git-repo" {
  export default download
}