import React, { useState } from 'react'
import  { Carousel } from 'antd'
import './products.scss'
import { LeftOutlined, RightOutlined }  from '@ant-design/icons'
import whiteFlower from './assets/whiteFlowers.jpg'
// import Slider from 'react-slick'

function Products(props){

  const [slider, setSlider] = useState(null)

  const carouselContentStyle = {
    height: '560px',
    width: '80vw',
    margin: 'auto',
    color: '#fff',
    lineHeight: '560px',
    textAlign: 'center',
    background: '#364d79',
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    width: '80vw',
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const imgContentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#364d79'
  }

  const nextImg = () => {
    slider.next()
  }

  const prevImg = () => {
    slider.prev()
  }

  return(
    <div id='products'>
    <LeftOutlined onClick={prevImg} className='leftArrow'/>
    <Carousel {...settings} autoplay id='carousel' ref={c => (setSlider(c))} >
      <div>
        <div style={carouselContentStyle} className='displayItem'>
          <div className='displayImg'><img style={imgContentStyle} src={whiteFlower} alt='white flower'/></div>
          <div className='displayDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
        </div>
      </div>
      <div>
        <div style={carouselContentStyle} className='displayItem'>
          <div className='displayImg'><img style={imgContentStyle} src={whiteFlower} alt='white flower'/></div>
          <div className='displayDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
        </div>
      </div>
      
    </Carousel>
    <RightOutlined onClick={nextImg} className='rightArrow'/>
    </div>
  )
}

export default Products