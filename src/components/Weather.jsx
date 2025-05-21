import React from 'react'
import SunnyIcon from '@mui/icons-material/Sunny';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const Weather = ({ weatherVal }) => {

    const tempCelsius = weatherVal?.main?.temp
    const cityName = weatherVal?.name
    const countryName = weatherVal?.sys?.country
    const datetimeStamp = weatherVal?.dt
    const WeatherDesc = weatherVal?.weather[0]?.main

    const currDate = datetimeStamp
        ? new Date(datetimeStamp * 1000).toLocaleString('en-US', { weekday: 'long', day: "numeric", month: "short" }) : ""

    const renderTempIcon = () => {
        if (tempCelsius > 23) {
            return <SunnyIcon />
        }
    }
    return (
        <div style={{
            backgroundColor: "grey",
            width: "300px",
            borderRadius: "6px",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",  // Center horizontally
            justifyContent: "center", // Center vertically
            margin: "auto", // For centering on the page
        }}>
            <div style={{ fontSize: "20px", fontWeight: 'bold' }}>
                Today
            </div>
            <div style={{
                display: 'flex',
                alignItems: "center",
                gap: "4px",
                fontSize: "45px",
                fontWeight: "bold",
                color: "white",
            }}>
                {tempCelsius}°C
                <img src={`https://openweathermap.org/img/w/${weatherVal?.weather[0].icon}.png`} alt="weather icon" style={{ width: '50px', height: '50px' }} />
            </div>
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>{WeatherDesc}</div>
            <div style={{ fontSize: "25px", fontWeight: "bold" }}>{currDate}</div>
            <div style={{ fontSize: "28px", fontWeight: "bold" }}>{cityName}, {countryName}</div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>Humidity: <span style={{ fontWeight: 'bold' }}>{weatherVal?.main?.humidity}%</span></div>

            <div style={{ fontSize: "22px", marginTop: "20px" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: '6px',
                    backgroundColor: "lightgray",  // To highlight this section
                    borderRadius: "6px"
                }}>
                    <div>
                        <WbSunnyIcon style={{ fontSize: "40px", marginLeft: '30px' }} />
                        <p style={{ marginLeft: '20px' }}>
                            Sunrise: {new Date(weatherVal?.sys?.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                        </p>
                    </div>
                    <div>
                        <NightsStayIcon style={{ fontSize: "40px", marginRight: '35px' }} />
                        <p style={{
                            // fontSize: "25px",
                            marginRight: '50px'
                        }}>
                            Sunset: {new Date(weatherVal?.sys?.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Weather