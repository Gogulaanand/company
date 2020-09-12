import React from 'react'
import { Layout } from 'antd'

function Footer(){
  const { Footer } = Layout

  const footerStyle = {
    textAlign: 'center',
    fontSize: '16px'
  }
  return(
    <>
    <Footer style={footerStyle}>
      Company &copy;2020
      <br/>
      Created by Company with &#10084;
    </Footer>
    </>
  )
}

export default Footer;