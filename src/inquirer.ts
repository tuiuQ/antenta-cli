import addRouter from './actions/addRouter'

export const libraryInfo = [
  {
    name: 'vue-router',
    version: '^4.0.10',
    alias: 'router',
    generate: addRouter
  },
  {
    name: 'vuex',
    version: '^4.0.2',
    alias: 'vuex'
  },
  {
    name: 'axios',
    version: '^0.21.1',
    alias: 'http'
  },
  {
    name: 'element-plus',
    version: '^1.0.2-beta.55',
    alias: 'ElementPlus'
  }
]

export const installQues = {
  type: 'confirm',
  name: 'install',
  default: false,
  message: '是否安装依赖?'
}

export const pkgToolQues = {
  type: 'list',
  name: 'pkgTool',
  choices: ['npm', 'yarn'],
  default: 'npm',
  message: 'npm or yarn ？'
}

export const libraryQues = {
  type: 'checkbox',
  name: 'library',
  choices: libraryInfo,
  message: "请选择安装的依赖"
}
