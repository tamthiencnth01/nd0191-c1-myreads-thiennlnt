import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.css'
import App from './App'
import Search from './items/Search'

//ThienNLNT make source code
const Routes = () => (
  <Switch>
    <Route exact path="/">
      <App />
    </Route>
    <Route path="/search">
      <Search />
    </Route>
  </Switch>
)
//ThienNLNT make source code
ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root'),
)
