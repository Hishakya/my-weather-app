import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import Navbar from './components/Navbar'
import Weather from './components/Weather';
import Card from './components/Card'
import UserCard from './components/UserCard';

function App() {
  const [city, setCity] = useState('Delhi')
  const [weatherData, setWeatherData] = useState('')
  const [fiveDays, setFiveDaysData] = useState('')
  const [userData, setUserData] = useState('hello')

  const fetchweatherData = async (cityVal) => {
    const apiKey = "ccb910c0933ad6dccd6a5ee5e8794724"
    const currWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${apiKey}`
    const fiveDaysUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityVal}&units=metric&appid=${apiKey}`
    const fiveDays2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityVal}&units=metric&appid=${apiKey}&cnt=5`
    // const fiveDays2 = `https://api.openweathermap.org/data/2.5/forecast?${cityVal}&cnt=3&appid=ccb910c0933ad6dccd6a5ee5e8794724`
    const getWeatherApi = await axios(currWeatherUrl)
    const getFiveDaysApi = await axios(fiveDaysUrl)
    const getFiveDaysApi2 = await axios(fiveDays2)
    setWeatherData(getWeatherApi?.data)
    setFiveDaysData(getFiveDaysApi?.data)
    console.log("TodayData...", getWeatherApi?.data);
    console.log("fiveDaysData..", getFiveDaysApi?.data);
    console.log("fiveDaysData.way2222....", getFiveDaysApi2?.data);

    const url = 'https://dummyjson.com/users'
    const userDatas = await axios.get(url)
    // console.log(111, userDatas.data);
    setUserData(userDatas.data)


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
      <UserCard usersData={userData} />
    </>
  )
}

export default App
