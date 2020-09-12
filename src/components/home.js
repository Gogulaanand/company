import React from 'react'
import welcome from './assets/welcome.png'
import './home.scss'
import { DownCircleTwoTone } from '@ant-design/icons'

function Home(props){
  return(
    <div id="home">
      <div id="homeDescription">
        <h1>Quality Products.<br/>At Affordable prices.</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nulla elementum, vehicula lectus ac, elementum odio. Donec ullamcorper imperdiet bibendum. Suspendisse nec vehicula erat. Nullam feugiat iaculis aliquam. Vestibulum sit amet vehicula magna, ut condimentum velit.</h3>
        <a id='checkOut' href='#products'>check out  <DownCircleTwoTone /></a>
      </div>
      <div id='homeLogo'>
        <img src={welcome} alt="welcomeLogo" id="welcomeImg"/>
      </div>
    </div>
  )
}

export default Home