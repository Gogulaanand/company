import React from 'react';
import './App.css';
import Home from './components/home'
import Header from './components/header'
import Products from './components/products'
import Contact from './components/contacts'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Products/>
      <Contact/>
    </div>
  );
}

export default App;
