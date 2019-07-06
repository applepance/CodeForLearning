import React, { Component } from "react";
import store from "./Store";

export default class App extends Component {
  state = {
    num: []
  }
  onIncrement = () => {
    let result = store.dispatch({
      type: "increment",
      todo: this.refs.content.value
    });
    this.setState({
      num: store.getState()
    })
  };

  onDecrement = () => {
    let result = store.dispatch({
      type: "decrement"
    });
    console.log(result)
    this.setState({
      num: result
    })
  };

  render() {
    store.subscribe(() => console.log("Store is changed: " + store.getState()));
    var list = this.state.num;
    console.log(list)
    return (
      <div className="container">
        {/* <h1 className="text-center mt-5">{store.getState()}</h1> */}
        {
          list.map(e => {
            return (
              <h1 key={e}>{e}</h1>
            )
          })
        }
        <input ref="content"></input>
        <p className="text-center">
          <button className="btn btn-primary mr-2" onClick={this.onIncrement}>
            Increase
          </button>
          {/* <button className="btn btn-danger my-2" onClick={this.onDecrement}> */}
          {/* Decrease */}
          {/* </button> */}
        </p>
      </div>
    );
  }
}
