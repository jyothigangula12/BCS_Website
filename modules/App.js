import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router App</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/contacts">Contact us</NavLink></li>
          <li><NavLink to="/admin">Admin page</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
