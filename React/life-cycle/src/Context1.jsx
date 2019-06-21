import React from 'react';
// 返回一个对象 两个组件
const ThemContext = React.createContext({
  theme: 'purple',
  toggleTheme: () => {}
})
class MyButton extends React.Component {
  render() {
    return (
      <ThemContext.Consumer>
        {
          (value) => {
            return (
              <button
              onClick={value.handleToggleBlue}
               style={{
                backgroundColor: value.theme
              }}>
                {this.props.children}
              </button>
            )
          }
        }
      </ThemContext.Consumer>
    )
  }
}
class Message extends React.Component {
  shouldComponentUpdate () {
    return false;
  }
  render() {
    return (
      <div>
        {this.props.text}
        <MyButton>delete</MyButton>
      </div>
    )
  }
}
class Context1 extends React.Component {
  constructor() {
    super();
    this.handleToggleBlue = () => {
      this.setState(state => {
        return {
          theme: 'blue'
        }
      })
    }
    this.state = {
      theme: 'purple',
      handleToggleBlue: this.handleToggleBlue
    }
  }
  // state = {} static 属性
  handleToggleTheme = () => {
    this.setState({
      theme: 'red'
    })
  }
  // handleToggleBlue = () => {
  //   console.log(1);
  //   this.setState({
  //     theme: 'blue'
  //   })
  // }
  render() {
    const msgs = ['msg1', 'msg2', 'msg3']
    return (
      <ThemContext.Provider value={this.state}>
        <button onClick={this.handleToggleTheme}>
          toggle theme
        </button>
        {
          msgs.map((msg, i) => {
            return <Message key={i} text={msg}/>
          })
        }
      </ThemContext.Provider>
    )
  }
}
export default Context1;