import React, { Component } from 'react';
import Swiper from 'swiper';
import { getCarousel, getNewAlbum } from '../../api/recommend';
import 'swiper/dist/css/swiper.css';
import './Recommend.styl';

class Recommend extends Component {
  state = {
    slideList: []
  }
  componentDidMount() {
    getCarousel().then(res => {
      // console.log("res", res);
      this.setState({
        slideList: res.data.slider
      }, () => {
        if (!this.sliderSwiper) {
          this.sliderSwiper = new Swiper('.slider-container', {
            loop: true,
            autoplay: 3000,
            pagination: '.swiper-pagination'
          })
        }
      })
    })
    getNewAlbum().then(res => {
      let albumList = res.albumlib.data.list;
      console.log('最新专辑-----------------',albumList);
      this.setState({
        albumList
      })
    })
  }
  renderSwiperItem() {
    const { slideList } = this.state;
    return (
      <>
        {slideList.map((slider) => {
          return (
            <div className="swiper-slide" key={slider.id}>
              <a href={slider.linkUrl} className="slider-nav">
                <img src={slider.picUrl} alt="" width="100%" height="100%" />
              </a>
            </div>
          )
        })}
      </>
    )
  }
  render() {
    return (
      <div className="music-recommend">
        <div>
          <div className="slider-container">
            <div className="swiper-wrapper">
              {this.renderSwiperItem()}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
