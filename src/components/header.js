import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
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
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{display: 'flex'}}>
        <Menu.Item>
          <a id='logo' href='/'>COMPANY</a>
        </Menu.Item>
        <Menu.Item key='home' style={{marginLeft: '65vw'}}>
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
