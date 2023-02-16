import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  return (
    <div className="App">
      <Carousel
        transitionTime={400}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={4000}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
      >
        <div>
          <img src="assets/01.jpg" />
        </div>
        <div>
          <img src="assets/02.jpg" />
        </div>
        <div>
          <img src="assets/03.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default App;
