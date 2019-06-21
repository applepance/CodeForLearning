import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';

function Index() {
  return (
    <div>HOME</div>
  )
}

function About() {
  return (
    <div>ABOUT</div>
  )
}

function User() {
  return (
    <div>USER</div>
  )
}

function Protect() {
  return (
    <div>PROTECT</div>
  )
}

function Login() {
  return (
    <div>LOGIN</div>
  )
}
/**
 * 进入页面之前 鉴权
 * <privateRouter path="/user" component={} />
 */
function PrivateRoute(props) {
  const { path, component: Component } = props
  return (
    <Route path={path} render={() => {
      return true
        ? <Component />
        : <Redirect to={{
          pathname: '/login'
        }} />
    }}></Route>
  )
}

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">to-HOME</Link>
        </li>
        <li>
          <Link to="/about">to-ABOUT</Link>
        </li>
        <li>
          <Link to="/user">to-USER</Link>
        </li>
        <li>
          <Link to="/protect">to-PROTECT</Link>
        </li>
      </ul>
      {
        true
          ? <Route path="/" exact component={Index}></Route>
          : <div> no router</div>
      }
      <Route path="/about" component={About}></Route>
      <PrivateRoute path="/user" component={User}></PrivateRoute>
      <Route path="/login" component={Login}></Route>
      <PrivateRoute path="/protect" component={Protect}></PrivateRoute>
      {/* <Route path="/protect" render={() => {
        return true
          ? <Protect></Protect>
          : <Redirect to={{
            pathname: '/login',
            state: {
              from: '/protect'
            }
          }} />
      }}></Route> */}
    </Router>
  );
}

export default App;
