import { Configuration } from "webpack";
import config from '../config'

process.env.TZ

export default {
  mode: 'development',
  devServer: {
    port: config.dev.port | 3000
  }
} as Configuration