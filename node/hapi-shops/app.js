const hapi = require('hapi');
require('env2')('./.env');
const routesShops = require('./routes/shops');
const config = require('./config');

const server = new hapi.Server();
server.connection({
  port: config.port,
  host: config.host
});
const init = async () => {
  console.log(config.port, config.host);
  server.route([
    ...routesShops
  ])
  await server.start();
}
init();