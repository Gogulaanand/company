import React from 'react'
// import { Link } from 'react-router-dom'
import './header.scss'
import { Nav, NavLink, NavItem } from 'shards-react'

function Header(){

  const navlinkStyle = {
    'marginLeft': '20px',
    'fontWeight': '300',
    color: '#000',
    height: '30px'   
  }
  return(
    <header>
      <a id='logo' href='/'>COMPANY</a>
      <Nav id='navbar'>
        <NavItem>
          <NavLink active href='#home' style={navlinkStyle}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active href='#products' style={navlinkStyle}>
            Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active href='#contact' style={navlinkStyle}>
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  )
}

export default Header
