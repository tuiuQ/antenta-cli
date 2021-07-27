import { Configuration } from "webpack";
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
} as Configuration