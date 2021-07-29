# Antenta CLI

## Getting Started

### 安装：
可以使用下列任一命令安装这个新的包：
```bash
# npm
$ npm install -g antenta-cli
# yarn
$ yarn add global antenta-cli
```
安装之后，你就可以在命令行中访问 `anc` 命令。你可以通过简单运行 `anc`，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。  
还可以用这个命令来检查其版本是否正确：
```bash
anc --version
```

### 创建一个项目

#### `anc create`

运行以下命令来创建一个项目：
```bash
anc create projectName
```

`anc create` 命令有一些可选项，你可以通过运行以下命令进行探索
```bash
anc create --help
```
```bash
Usage: anc create <project-name> [options]

创建新项目

Options:
  -i, --install               是否自动安装依赖
  -t, --tool [value]          选择构建工具
  -pt, --packageTool [value]  选择包管理工具
  -h, --help                  display help for command

运行 anc <command> --help 获取有关命令的详细用法的帮助
```


### 添加组件/指令

#### `anc add`

添加组件
```bash
anc add c <name>
```
`anc add c` 命令有一些可选项，你可以通过运行以下命令进行探索
```bash
anc add c --help
```
```bash
Usage: anc add c [options] <name>

添加组件

Options:
  -t, --tsx   是否使用tsx
  -h, --help  display help for command

运行 anc <command> --help 获取有关命令的详细用法的帮助
```

添加指令
```bash
anc add d <name>
```