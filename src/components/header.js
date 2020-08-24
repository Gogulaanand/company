import React from 'react'
// import { Link } from 'react-router-dom'
import './header.scss'
import { Nav, NavLink, NavItem } from 'shards-react'

function Header(){
  return(
    <Nav>
      <NavItem>
        <NavLink active href='#home'>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active href='#products'>
          Products
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active href='#contact'>
          Contact
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Header
