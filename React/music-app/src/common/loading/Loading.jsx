import React, { Component } from 'react';
import loadingImg from './loading.gif';
import './loading.styl';

class Loading extends Component {
  state = {  }
  render() {
    const { show, title } = this.props
    return (
      <div className="loading-container"
      style={{display: show ? '': 'none'}}
      >
        <div className="loading-wrapper">
          <img src={loadingImg} width="18px" 
          height="18px"
           alt=""/>
          <div className="loading-title">
            { title }
          </div>
        </div>
      </div>
    );
  }
}
 
export default Loading;