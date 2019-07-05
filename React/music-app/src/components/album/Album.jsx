import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Scroll from '../../common/scroll/Scroll';
import { getAlbuminfo } from '../../api/recommend';
import './album.styl';
class Album extends Component {
  state = {
    show: false
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    getAlbuminfo(id).then(res => {
      console.log('getAlbuminfo', res);
    })
    this.setState({
      show: true
    })
  }
  render() {
    return (
      <CSSTransition in={this.state.show} timeout={300}
      classNames="translate">
        <div className="music-album">
          <div ref="albumBg" className="album-img">
            <div className="filter"></div>
          </div>
          <div ref="albumFixedBg" className="album-img fixed">
            <div className="filter"></div>
          </div>
          <div className="play-wrapper" ref="playButtonWrapper">
            <div className="play-button">
              <i className="icon-play"></i>
              <span>播放全部</span>
            </div>
          </div>
          <div className="album-container">
            <div className="album-scroll">
              <Scroll>
                <div></div>
                </Scroll>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}
export default Album;