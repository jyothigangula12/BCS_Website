import React from 'react'
import NavLink from './NavLink'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import store from '../store/index'
//import addEvent from '../store/actions'
import {Nav, Navbar, NavItem, NavDropdown, Button, MenuItem,Glyphicon} from "react-bootstrap"
// import injectTapEventPlugin from 'react-tap-event-plugin'

import materialize from 'materialize-css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import { Button, Row, Col, Icon } from 'react-materialize';


export default React.createClass({
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <div id="topBar">
        <a href="tel:+666 13 13 13">Tel: 666 13 13 13</a> | <NavLink to="/contacts"> email@email.com</NavLink>
        <span id="socialTopBar">fb | twitter | skype |<span> </span> 
        <NavLink to="/cart">
          <Glyphicon glyph="glyphicon glyphicon-shopping-cart" />
        </NavLink>
        {" "}
        </span>
        </div>
          {/*<PageHeader>A new website <small>Built with React, yo!</small></PageHeader>*/}

{/* main nav bar*/}
          <Navbar>
          <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/calendar">Calendar</NavLink></li>          
          <li><NavLink to="/contacts">Contact us</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          {/*<li><NavLink to="/checkout">Checkout</NavLink></li>*/}
          <li><NavLink to="/admin">Admin page</NavLink></li>
          </ul>
          </div>
          </Navbar>

{/*old nav bar*/}
        <Nav bsStyle="tabs" >
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/calendar">Calendar</NavLink></li>          
          <li><NavLink to="/contacts">Contact us</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          {/*<li><NavLink to="/checkout">Checkout</NavLink></li>*/}
          <li><NavLink to="/admin">Admin page</NavLink></li>
          {/*<li><NavLink to="/repos">Repos</NavLink></li>*/}
      </Nav>
        {this.props.children}

      </div>
      </MuiThemeProvider>
    )
  }
})


