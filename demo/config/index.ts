import prod from './prod.env'
import dev from './dev.env'

export interface ConfigEnv {
  NODE_ENV: string;
  baseURL: string;
}

export default {
  NODE_ENV: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  build: {
    env: prod
  },
  dev: {
    env: dev,
    port: 8080
  }
}