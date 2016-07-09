'use strict'
import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import ExternalLanding from './components/Pages/ExternalLanding'
import Dashboard from './components/Pages/Dashboard'
import Navigation from './components/Molecules/Navigation'



class NoMatch extends Component {
  render() {
    return (
      <p>404 Page not found</p>
    )
  }
}

ReactDOM.render(
  <div>
    <Navigation />
    <Router history={hashHistory}>
      <Route path="/" component={ExternalLanding} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="*" component={NoMatch} />
    </Router>
  </div>
  ,document.getElementById('content'))
