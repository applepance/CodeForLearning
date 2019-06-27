import React, { Component } from 'react';
// eslint-disable-next-line
import { debounce, decDebounce, decArrowDebounce, decDisplayName } from './util';
// 防抖
// 加了一个静态属性
@decDisplayName('CustomExampleDebounce')
class ExampleDebounce extends Component {
  state = {}
  handleSubmit = debounce(function () {
    console.log('submit request')
  }, 1000)
  // @decDebounce(2000)
  // handleSubmit() {
  //   console.log('submit request')
  // }
  @decArrowDebounce(1000)
  handleBuy = () =>　{
    console.log('Buy Buy Buy!')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>
          提交
        </button>
        <button onClick={this.handleBuy}>
          立即购买
        </button>
      </div>
    )
  }
}

export default ExampleDebounce;