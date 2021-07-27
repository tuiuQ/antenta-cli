import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import base from './webpack.config.base'
import dev from './webpack.config.dev'
import prod from './webpack.config.prod'

export default (env: Record<string, boolean | string | number>): Configuration => {
  const isProd = env.production === true
  if (isProd) {
    process.env.NODE_ENV = 'production'
    return merge(base, prod)
  }
  process.env.NODE_ENV = 'development'
  return merge(base, dev)
}