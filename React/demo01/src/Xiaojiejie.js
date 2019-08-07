import React, { Component, Fragment } from "react";

class Xiaojiejie extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '333',
      list: ['111','222']
    }
  }
  render(){
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/> <button onClick={this.addList.bind(this)}>+</button>
        <ul className="list">
          {
            this.state.list.map((element, index) => {
              return (
                <li key={element+index}>{element}</li>
              )  
            })
          }
        </ul>
      </Fragment>
    )
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  addList(e) {
    let inputValue = this.state.inputValue
    let list = this.state.list
    this.setState({
      list: [inputValue ,...list],
      inputValue: ''
    })
  }
}

export default Xiaojiejie