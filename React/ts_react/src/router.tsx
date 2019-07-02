import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { App } from './app';
import { Provider } from 'react-redux';
import { store } from './store';
import { About, MembersPageContainer }  from './components';


export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Route component={App} />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/members" component={MembersPageContainer} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
