import React from 'react';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Root from './components/Root.jsx';
import './App.css';

function App() {

  return (
    <div className="App">
      <Nav />
      <Cart />
      <Root />
      <Footer />
    </div>
  );
}

export default App;
