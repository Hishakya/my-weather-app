import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import Navbar from './components/navbar'
import Weather from './components/Weather';
import Card from './components/CArd';

function App() {
  const [city, setCity] = useState('Delhi')
  const [weatherData, setWeatherData] = useState('')
  const [fiveDays, setFiveDaysData] = useState('')

  const fetchweatherData = async (cityVal) => {
    const apiKey = "ccb910c0933ad6dccd6a5ee5e8794724"
    const currWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apiKey}`
    const fiveDaysUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityVal}&appid=${apiKey}`
    const getWeatherApi = await axios(currWeatherUrl)
    const getFiveDaysApi = await axios(fiveDaysUrl)
    setWeatherData(getWeatherApi?.data)
    setFiveDaysData(getFiveDaysApi?.data)
    console.log("TodayData...", getWeatherApi?.data);
    console.log("fiveDaysData..", getFiveDaysApi?.data);


  }

  const handleSearch = (searchCity) => {
    setCity(searchCity)
  }

  useEffect(() => {
    fetchweatherData(city)
  }, [city])

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div style={{ display: 'flex', padding: '30px', gap: '20px' }}>
        {weatherData && (
          <div style={{ flex: '1', marginRight: "10px" }}>
            <Weather weatherVal={weatherData} />
          </div>
        )}
      </div>
      <Card fiveDaysForcast={fiveDays} />
    </>
  )
}

export default App
