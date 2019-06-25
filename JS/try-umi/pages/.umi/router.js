import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'E:/nvm/v8.14.0/node_modules/umi/dynamic';
import renderRoutes from 'E:/nvm/v8.14.0/node_modules/umi/lib/renderRoutes';
import history from '@tmp/history';


const Router = DefaultRouter;

const routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('../index.js').default
  },
  {
    "component": () => React.createElement(require('E:/nvm/v8.14.0/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
const plugins = require('E:/nvm/v8.14.0/node_modules/umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return (
<Router history={history}>
      { renderRoutes(routes, props) }
    </Router>
  );
}
