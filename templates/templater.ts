const IMPORT_TEMPLATE: string = `import {{name}} from './{{package}}'`;
const USE_TEMPLATE: string = `app.use({{name}})`
const MAIN_TEMPLATE: string = `
import { createApp } from 'vue'
import App from './App'
{{import}}

const app = createApp(App)

{{use}}

app.mount("#app")
`
export default {
  IMPORT_TEMPLATE,
  USE_TEMPLATE,
  MAIN_TEMPLATE
}
