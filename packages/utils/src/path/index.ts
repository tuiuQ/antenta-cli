import { join } from 'path'

export function resolve(filePath: string): string {
  return join(__dirname, '..', filePath)
}

export function test(): string {
  return 'test'
}