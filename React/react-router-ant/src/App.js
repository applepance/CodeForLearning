import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './page/Layout'
import 'antd/dist/antd.css'
// import './App.css';

function Table() {
  return (
    <div>Table</div>
  )
}

function Label() {
  return (
    <div>Label</div>
  )
}



{/* <Route path="/table" component={Table}></Route>
<Route path="/label" component={Label}></Route> */}
function App() {
  return (
    <Router>
      <Route path="/" component={Layout}>
      </Route>
    </Router>
  );
}

export default App;
