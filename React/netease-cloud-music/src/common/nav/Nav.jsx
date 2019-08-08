import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.styl'
class Nav extends Component {
  state = {}
  render() {
    return (
      <div className="music-tab">
        <NavLink className="tab-item" activeClassName="music-tab-active" to="/recommend">
          <div className="navtxt">
            <span>推荐音乐</span>
          </div>
        </NavLink>
        <NavLink className="tab-item" activeClassName="music-tab-active" to="/ranking">
          <div className="navtxt">
            <span>热歌榜</span>
          </div>
        </NavLink>
        <NavLink className="tab-item" activeClassName="music-tab-active" to="/search">
          <div className="navtxt">
            <span>搜索</span>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default Nav;