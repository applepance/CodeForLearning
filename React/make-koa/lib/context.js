const delegates = require('delegates');
var proto = module.exports = {}

// 代理
// ctx.request.url
// ctx.url
delegates(proto, 'response')
.access('body');
delegates(proto, 'request')
.access('method')
.access('url')