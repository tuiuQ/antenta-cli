import ErrnoException = NodeJS.ErrnoException;

function download(
  repo: string,
  dest: string,
  opts: { clone: boolean },
  callback: (error: ErrnoException) => void
): void

function download(
  repo: string,
  dest: string,
  callback: (error: ErrnoException) => void
): void

declare module 'download-git-repo' {
  export default download
}
