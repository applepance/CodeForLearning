import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Topbar from '../common/topbar/Topbar'
import Nav from '../common/nav/Nav'
import Recommend from './recommend/Recommend'
import Ranking from './ranking/Ranking'
import Search from './search/Search'
import './App.styl';

function App() {
  return (
    <Router>
      <Topbar />
      <Nav />
      <div className="music-view">
        <Switch>
          <Route path="/recommend" component={Recommend} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/search" component={Search} />
          <Redirect from="/" to="/recommend" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
