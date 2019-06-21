const Hapi = require('hapi');

const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi');
const configsConnection = require('./config/index');
// 配置服务器启动 host 与端口
server.connection({
  port: configsConnection.port,
  host: configsConnection.host
});

const init = async () => {
  server.route([
    ...routesHelloHapi
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
