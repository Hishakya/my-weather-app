import React from 'react'
import SunnyIcon from '@mui/icons-material/Sunny';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const Weather = ({ weatherVal }) => {

    const tempCelsius = weatherVal?.main?.temp
    const cityName = weatherVal?.name
    const countryName = weatherVal?.sys?.country
    const datetimeStamp = weatherVal?.dt
    const WeatherDesc = weatherVal?.weather[0]?.description

    const currDate = datetimeStamp
        ? new Date(datetimeStamp * 1000).toLocaleString('en-US', { weekday: 'long', day: "numeric", month: "short" }) : ""

    const renderTempIcon = () => {
        if (tempCelsius > 23) {
            return <SunnyIcon />
        }
    }
    return (
        <div style={{ backgroundColor: "grey", width: "200px", borderRadius: "6px", padding: "30px" }}>
            <div style={{ fontSize: "20px" }}>
                Now
            </div>
            <div style={{ display: 'flex', alignItems: "center", gap: "4px", fontSize: "35px", fontWeight: "bold" }}>
                {tempCelsius}c
                {renderTempIcon()}
            </div>
            <div>{WeatherDesc}</div>
            <div><div>{currDate}</div></div>
            <div><div>{cityName} {countryName}</div></div>
            <div>Humidity: {weatherVal?.main?.humidity}</div>
            <div style={{ fontSize: "22px", }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: '10px' }}>
                    <div>
                        <WbSunnyIcon style={{ fontSize: "40px", marginLeft: '30px' }} />
                        <p style={{ fontSize: "25px", marginLeft: '20px' }} >Sunrise: {new Date(weatherVal?.sys?.sunrise * 1000).toLocaleTimeString()}</p>
                    </div>
                    <div>
                        <NightsStayIcon style={{ fontSize: "40px", marginRight: '35px' }} />
                        <p style={{ fontSize: "25px", marginRight: '50px' }} >Sunset: {new Date(weatherVal?.sys?.sunset * 1000).toLocaleTimeString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather