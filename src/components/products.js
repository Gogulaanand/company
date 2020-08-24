import React from 'react'
import  { Carousel } from 'antd'
import './products.scss'
import { ArrowRightOutlined, ArrowLeftOutlined }  from '@ant-design/icons'
import whiteFlower from './whiteFlowers.jpg'
// import Slider from 'react-slick'

function Products(props){

  const contentStyle = {
    height: '460px',
    color: '#fff',
    lineHeight: '460px',
    textAlign: 'center',
    background: '#364d79',
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ArrowRightOutlined />,
    previousArrow: <ArrowLeftOutlined/>,
    cssEase: 'linear'
  }

  return(
    <div id='products'>
    <Carousel {...settings} id='carousel'>
      <div>
        <div style={contentStyle} className='displayItem'>
          <img style={contentStyle} src={whiteFlower} alt='white flower' className='displayImg'/>
          <p className='product-desc'>Product 1</p>
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>

      <div>
        <h3 style={contentStyle}>2</h3>
      </div>

      <div>
        <h3 style={contentStyle}>3</h3>
      </div>

      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
      <div>
        <h3 style={contentStyle}>5</h3>
      </div>
    </Carousel>
    </div>
  )
}

export default Products