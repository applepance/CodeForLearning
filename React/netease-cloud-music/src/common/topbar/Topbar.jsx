import React, { Component } from 'react';
import './topbar.styl'
class Topbar extends Component {
  state = {  }
  render() { 
    return (
      <div className="topfix">
        <div className="topfix-left">
          网易云音乐
          </div>
        <div className="topfix-right">
          下载音乐
          </div>
      </div>
    );
  }
}
 
export default Topbar;