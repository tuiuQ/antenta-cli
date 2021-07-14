export interface CommandOptions {
  [key: string]: string | boolean
}

export type pkg = 'npm' | 'yarn'
export type tool = 'webpack' | string

export interface CreateOptions {
  tool: tool;
  install: boolean;
  pkgTool: pkg;
}
