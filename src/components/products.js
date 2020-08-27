import React, { useState } from 'react'
import  { Carousel } from 'antd'
import './products.scss'
import { ArrowRightOutlined, ArrowLeftOutlined }  from '@ant-design/icons'
import whiteFlower from './whiteFlowers.jpg'
// import Slider from 'react-slick'

function Products(props){

  const [slider, setSlider] = useState(null)

  const carouselContentStyle = {
    height: '560px',
    color: '#fff',
    lineHeight: '560px',
    textAlign: 'center',
    background: '#364d79',
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
    <Carousel {...settings} id='carousel' ref={c => (setSlider(c))} >
      <div>
        <div style={carouselContentStyle} className='displayItem'>
          <ArrowLeftOutlined onClick={prevImg} className='leftArrow'/>
          <div className='displayImg'><img style={imgContentStyle} src={whiteFlower} alt='white flower'/></div>
          <div className='displayDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
          <ArrowRightOutlined onClick={nextImg} className='rightArrow'/>
        </div>
      </div>
      <div>
        <h3 style={carouselContentStyle}>1</h3>
      </div>

      <div>
        <h3 style={carouselContentStyle}>2</h3>
      </div>

      <div>
        <h3 style={carouselContentStyle}>3</h3>
      </div>

      <div>
        <h3 style={carouselContentStyle}>4</h3>
      </div>
      <div>
        <h3 style={carouselContentStyle}>5</h3>
      </div>
    </Carousel>
    </div>
  )
}

export default Products