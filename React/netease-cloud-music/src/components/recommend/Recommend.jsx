import React, { Component } from 'react'
import Remdul from '../../common/remdul/Remdul'
import Sglst from '../../common/sglst/Sglst'
import './recommend.styl'
class Recommend extends Component {
  state = {  }
  render() {
    return (
      <div className="recommend-view">
        <div className="remd_tl">推荐歌单</div>
        <div className="remd_songs">
          <Remdul />
        </div>
        <div className="remd_tl">最新音乐</div>
        <div className="remd_newsg">
          <Sglst />
        </div>
      </div>
    );
  }
}
 
export default Recommend;