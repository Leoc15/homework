import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [weatherData, SetWeatherData] = useState({});

  const apiKey = `your api`;

  async function getWeatherData() {
    try {
      const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=08701,US&appid=${apiKey}&units=imperial&lang=he`);

      const data = await r.json();

      SetWeatherData(data);
    } catch (e) {
      // console.error('oops', e);
      console.error('oops', e);
    }
  }
  useEffect(() => {
    getWeatherData()
  }, []);
  if (!weatherData?.name) return <>loading</>
  return (
    <>
      <img
        src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
      />
      <div className="card">
        <h1>the weather in {weatherData.name} is {weatherData.main.temp}degrees</h1>

      </div>
    </>
  )
}

export default App
