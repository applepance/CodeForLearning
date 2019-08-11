import React, { Component } from 'react';
import axios from 'axios'
import './sglst.styl'
class Sglst extends Component {
  state = {
    songList: []
  }
  componentDidMount() {
    axios.get('http://localhost:3000/personalized/newsong')
      .then(res => {
        let songList = [];
        for (let i = 0; i < 10 && i < res.data.result.length; i++) {
          songList.push(res.data.result[i]);
        }
        this.setState({
          songList
        })
      })
      .catch(err => { console.log('获取数据出错' + err) })
  }
  render() {
    const songList = this.state.songList;
    return (
      <div className="m-sglst">
        {
          songList.map(song => {
            return (
              <a href={"https://music.163.com/m/song?id=" + song.id} className="m-sgitem" key={song.id}>
                <div className="song-flex">
                  <div className="flex-left">
                    <div className="song-name">{song.name}</div>
                    <div className="song-desc">
                      <i className="song-icon"></i>
                      {(song.song.artists.map(art => art.name)).join(' / ')} - {song.song.album.name}
                    </div>
                  </div>
                  <div className="flex-right">
                    <div className="play-icon"></div>
                  </div>
                </div>
              </a>
            )
          })
        }
      </div>
    );
  }
}

export default Sglst;