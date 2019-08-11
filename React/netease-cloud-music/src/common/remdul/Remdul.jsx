import React, { Component } from 'react';
import axios from 'axios'
import './remdul.styl'
class Remdul extends Component {
  state = {
    remdList: []
  }
  componentDidMount() {
    axios.get('http://localhost:3000/personalized')
      .then(res => {
        let remdList = [];
        for (let i = 0; i < 6 && i < res.data.result.length; i++) {
          remdList.push(res.data.result[i]);
        }
        this.setState({
          remdList
        })
      })
      .catch(err => { console.log('获取数据出错' + err) })
  }
  render() {
    const remdList = this.state.remdList;
    return (
      <div className="remd_ul">
        {
          remdList.map((remd, index) => {
            return (
              <a href={"https://music.163.com/m/playlist?id=" + remd.id} className="remd_li" key={remd.id}>
                <div className="remd_img">
                  <img src={remd.picUrl} className="u-img" alt={remd.name}/>
                  <span className="remd_lnum">{remd.playCount > 100000 ? (remd.playCount/10000).toFixed(1)+'万' : remd.playCount}</span>
                </div>
                <div className="remd_text">{remd.name}</div>
              </a>
            )
          })
        }
      </div>
    );
  }
}

export default Remdul;