// import React from 'react';
import './App.css';
import React, { Component } from 'react'
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (

      <div className="App">
        <Router>
          <Switch>
            <Route path ="/reactapp" exact component ={HomePage}/>
            <Route path = "/reactapp/contact" component = {ContactPage}/>
            <Route path = "/reactapp/aboutus" component = {AboutPage}/>
            <Route component = {ErrorPage}/>
          </Switch>
        </Router>

      </div>
    )
  }
}

export default App;




