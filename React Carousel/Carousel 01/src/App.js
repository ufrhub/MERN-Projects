import React from 'react';
import './App.css';
import Carousel from './carousel';

function App() {

  return (
    <div className="App">
      <Carousel>
        <img src="https://newevolutiondesigns.com/images/freebies/car-wallpaper-4.jpg" alt="" style={{ width: "100%", height: "100%" }} />
        <img src="https://newevolutiondesigns.com/images/freebies/car-wallpaper-6.jpg" alt="" style={{ width: "100%", height: "100%" }} />
        <img src="https://newevolutiondesigns.com/images/freebies/car-wallpaper-12.jpg" alt="" style={{ width: "100%", height: "100%" }} />
        <img src="https://newevolutiondesigns.com/images/freebies/car-wallpaper-8.jpg" alt="" style={{ width: "100%", height: "100%" }} />
        <img src="https://newevolutiondesigns.com/images/freebies/car-wallpaper-11.jpg" alt="" style={{ width: "100%", height: "100%" }} />
        <img src="https://newevolutiondesigns.com/images/freebies/car-wallpaper-9.jpg" alt="" style={{ width: "100%", height: "100%" }} />
      </Carousel>
    </div>
  );

};

export default App;