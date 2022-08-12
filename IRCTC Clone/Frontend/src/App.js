import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/HeaderComponents/Header';
import Body from './Components/BodyComponents/Body';
import Footer from './Components/FooterComponents/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  );
};

export default App;