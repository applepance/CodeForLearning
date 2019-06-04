require('./style.less') // 一切皆可打包
// webpack 将从这个index.js入口，进去打包 less->css
const { log } = require('./utils')

log('hello world');