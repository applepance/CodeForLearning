import React, { Component } from 'react';
import { Consumer } from './context';
export default ( mapStateToProps, mapDispatchToProps ) => ( WrappedComponent ) => {
  class ConnectdComponent extends Component {
    render() {
      return (
        <Consumer>
          {
            (store) => {
              const state = store.state;
              const dispatch = store.dispatch;
              // 放着所有的Props
              let filterProps = {}
              if(typeof mapDispatchToProps === "function"){
                Object.assign(filterProps, mapDispatchToProps(dispatch));
              }
              if(typeof mapStateToProps === "function"){
                Object.assign(filterProps, mapStateToProps(state));
              }
              return (<WrappedComponent {...filterProps}/>)
            }
          }
        </Consumer>
      );
    }
  }
  return ConnectdComponent;
}