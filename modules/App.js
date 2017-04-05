import React from 'react'
import NavLink from './NavLink'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import store from '../store/index'
//import addEvent from '../store/actions'
import {Nav, Navbar, NavItem, NavDropdown, MenuItem,Button,Glyphicon} from "react-bootstrap"

export default React.createClass({
  render() {
    return (
      <div>
        <div id="topBar">
        <a href="tel:+666 13 13 13">Tel: 666 13 13 13</a> | <NavLink to="/contacts"> email@email.com</NavLink>
        <span id="socialTopBar">fb | twitter | whatever |<span> </span> 
        <NavLink to="/cart">
          <Glyphicon glyph="glyphicon glyphicon-shopping-cart" />
        </NavLink>
        {" "}
        </span>
        </div>
          <PageHeader>A new website <small>Built with React, yo!</small></PageHeader>
        <Nav bsStyle="tabs" >
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/calendar">Calendar</NavLink></li>          
          <li><NavLink to="/contacts">Contact us</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/checkout">Checkout</NavLink></li>
          <li><NavLink to="/admin">Admin page</NavLink></li>
          {/*<li><NavLink to="/repos">Repos</NavLink></li>*/}
      </Nav>
        {this.props.children}
       

      </div>
    )
  }
})


