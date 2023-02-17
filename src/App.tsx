import React, { useEffect, useState } from 'react';
import './App.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { sportServices } from './services/sports_services';
import GameData from './models/game_data';
import CarouselAnimated from './components/carousel/carousel';

function App() {
  const [data, setData] = useState<GameData>();

  async function fetchData() {
    const data = await sportServices();
    if (data)
      setData(data)
  }

  useEffect(() => {
    fetchData();
    const fetchInterval = setInterval(fetchData, 1000 * 60 * 2);
    return () => {
      clearInterval(fetchInterval)
    }
  }, [])


  useEffect(() => {
    const refreshInterval = setInterval(() => {
      window.location.reload();
    }, 1000 * 60 * 30);
    return () => {
      clearInterval(refreshInterval)
    }
  }, [])

  return (
    <div className="App">
      <CarouselAnimated data={data} />
    </div>
  );
}

export default App;
