import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Contacts from './modules/Contacts'
import Admin from './modules/Admin'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
  	  <Route path="/contacts" component={Contacts}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))