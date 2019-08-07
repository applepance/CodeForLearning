import React, { Component } from "react";

class App extends Component {
  render(){
    // return (
    //   <div>
    //     <ul className="list">
    //       <li>111</li>
    //       <li>222</li>
    //     </ul>
    //   </div>
    // )
    var child1 = React.createElement('li',null,'111')
    var child2 = React.createElement('li',null,'222')
    var root = React.createElement('ul',{className: 'list'},child1,child2)
    return root;
  }
}

export default App