import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
  Redirect, NavLink
} from 'react-router-dom';
import './App.styl';

function App() {
  return (
    <Router>
        <div className="topfix">
          <div className="topfix-left">
            <h1>网易云音乐</h1>
          </div>
          <div className="topfix-right">
            下载音乐
          </div>
        </div>
        <div className="music-tab">
          <div className="tab-item">
            <NavLink className="nav-link" to="/recommend">
              <span>推荐音乐</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/ranking">
              <span>热歌榜</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/search">
              <span>搜索</span>
            </NavLink>
          </div>
        </div>
        <div className="music-view">
          {/* 路由 */}
          <Switch>
            {/* <Route path="/recommend" component={Recommend} /> */}
            {/* <Route path="/ranking" component={Ranking} /> */}
            {/* <Route path="/search" component={Search} /> */}
            {/* <Redirect from="/" to="/recommend" /> */}
          </Switch>
        </div>
    </Router>
  );
}

export default App;
