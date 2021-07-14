function render(
  input: string,
  view: {
    [key: string]: string
  }
): string

declare module "json-templater/string" {
  export default render
}
