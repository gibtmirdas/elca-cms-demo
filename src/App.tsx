import React from 'react';
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
        autoPlay={true} // autoplay
        infiniteLoop={true}
        showIndicators={false}
      >
        {/* <div>
          <div className='first'>
            <div className='first-content'>
              Yolo
            </div>
          </div>
        </div> */}
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
