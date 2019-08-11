import React, { Component } from 'react';
import axios from 'axios'
import './ranking.styl'
class Ranking extends Component {
  state = {  }
  render() { 
    return (
      <div className="m-hmhot">
        <div className="hotop">
          <div className="u-hmsprt"></div>
          <div className="hottime">更新日期： {((new Date()).getMonth()+1)+"月"+((new Date()).getDate()-1)+"日"}</div>
        </div>
      </div>
    );
  }
}
 
export default Ranking;