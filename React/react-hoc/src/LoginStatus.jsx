import React, { Component } from 'react';
import withLogin from './WithLogin';

@withLogin
class LoginStatus extends Component {
  render() {
    // if (!isLogin) {
    //   return (
    //     <button>需要登录</button>
    //   )
    // }
    return (
      <button>已经登录</button>
    );
  }
}
LoginStatus.displayName="LoginStatus";
export default LoginStatus;