import React from 'react';
import './App.css';
import Home from './components/home'
import Header from './components/header'
import Products from './components/products'
import Contact from './components/contacts'
import Footer from './components/footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { BackTop, Tooltip } from 'antd'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Products/>
      <Contact/>
      <Footer/>
      <Tooltip title='Go back to top'>
        <BackTop/>
      </Tooltip>
    </div>
  );
}

export default App;
