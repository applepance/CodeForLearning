import React, { Component } from 'react';
import BScroll from 'better-scroll';
import './scroll.styl';

class Scroll extends Component {
  state = {  }
  componentDidUpdate() {
    if (this.bscrol && this.props.refresh) {
      this.bscrol.refresh();
    }
  }
  componentDidMount() {
    if (!this.bscrol) {
      this.bscrol = new BScroll(this.refs.scrollView, {
        probeType: 3,
        click: () => {}
      })
      this.bscrol.on('scroll', (e) => {
        this.props.onScroll(e);
      })
    }
  }
  componentWillUnmount() {
    this.bscrol = null;
  }
  render() { 
    return (
      <div className="scroll-view"
      ref="scrollView"
      >
        { this.props.children }
      </div>
    );
  }
}
 
export default Scroll;