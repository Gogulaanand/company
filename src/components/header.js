import React, { useState } from 'react'
import './header.scss'
import { Menu } from 'antd'

function Header(){

  const [current, setCurrent] = useState('home')

  const handleClick = (e) => {
    setCurrent(e.key)
  }

  const navlinkStyle = {
    textDecoration: 'none'
  }

  return(
    <header>
      <a id='companyLogo' href='/company'>COMPANY</a>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" id='navMenu'>
        <Menu.Item key='home'>
          <a href="#home" style={navlinkStyle}>Home</a>
        </Menu.Item>
        <Menu.Item key='products'>
          <a href="#products" style={navlinkStyle}>Products</a>
        </Menu.Item>
        <Menu.Item key='contact'>
          <a href="#contact" style={navlinkStyle}>Contact</a>
        </Menu.Item>
      </Menu>
    </header>
  )
}

export default Header
