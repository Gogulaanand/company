import React, { lazy, Suspense} from 'react';
import './App.css';
import Home from './components/home'
import Header from './components/header'
import { BackTop, Tooltip, Spin } from 'antd'

const Products = lazy(() => import('./components/products'))
const Contact = lazy(() => import('./components/contacts'))
const Footer = lazy(() => import('./components/footer'))
const renderLoader = () => <Spin/>

function App() {


  return (
    <div className="App">
      <Header/>
      <Home/>
      <Suspense fallback={renderLoader()}>
        <Products/>
      </Suspense>
      <Suspense fallback={renderLoader()}>
        <Contact/>
      </Suspense>
      <Suspense fallback={renderLoader()}>
        <Footer/>
      </Suspense>
      <Tooltip title='Go back to top'>
        <BackTop/>
      </Tooltip>
    </div>
  );
}

export default App;
