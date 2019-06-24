import React, { Component } from 'react';
import withLogin from './WithLogin';

@withLogin
class ShopCart extends Component {
  render() {
    // if (!isLogin) {
    //   return (
    //     <button>需要登录</button>
    //   )
    // }
    const { a, b } = this.props;
    return (
      <ul>
        <li>{a}</li>
        <li>{b}</li>
        <li>手机</li>
        <li>平板</li>
      </ul>
    );
  }
}
ShopCart.displayName = 'ShopCart';
export default ShopCart;