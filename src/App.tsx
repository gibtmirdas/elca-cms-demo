import React, { useEffect, useState } from 'react';
import './App.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { sportServices } from './services/sports_services';
import Bet from './components/bet';
import GameData from './models/game_data';

function App() {
  const [data, setData] = useState<GameData>();

  async function fetchData() {
    var data = await sportServices();
    console.debug('setData', data);
    if (data)
      setData(data)
  }

  useEffect(() => {
    fetchData()
    var fetchInterval = setInterval(fetchData, 1000 * 60 * 2);
    return () => {
      clearInterval(fetchInterval)
    }
  }, [])

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
        swipeable={false}
        stopOnHover={true}
      >
        <div>
          <Bet data={data} />
        </div>
        <div>
          <img src="assets/02.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default App;
