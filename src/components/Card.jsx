

const Card = ({ fiveDaysForcast }) => {

    const dateTracker = {};
    const filteredData = [];

    fiveDaysForcast?.list?.forEach(item => {
        console.log(888, item.dt_txt.split(' ')[0]);

        const date = item.dt_txt.split(' ')[0];

        if (!dateTracker[date]) {
            dateTracker[date] = true;
            filteredData.push(item);
        }
    });

    const dateFormat = (timeStamp) => {
        return new Date(timeStamp * 1000).toLocaleString('en-US', { weekday: 'long', day: "numeric", month: "short" })
    }
    return (
        <div style={{ backgroundColor: "grey", borderRadius: "6px", padding: "30px" }}>
            <p style={{ fontWeight: "bold", textAlign: 'center' }}>Five days Forecast</p>
            <div style={{ display: 'flex', overflowX: 'auto', flexWrap: 'nowrap', justifyContent: "space-between", gap: '20px' }}>
                {filteredData?.map((item, index) => (
                    <div key={index} className="weather-card" style={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        padding: '20px',
                        minWidth: '160px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <img src={`https://openweathermap.org/img/w/${item?.weather[0].icon}.png`} alt="weather icon" style={{ width: '50px', height: '50px' }} />
                        <p style={{ fontSize: "35px", fontWeight: "bold", paddingBottom: "5px" }} >{Math.round(item.main.temp)}°c</p>
                        <p style={{ fontWeight: "bold", paddingTop: "5px", paddingBottom: "5px", margin: 0 }} > <strong>Humidity:</strong> {item.main.humidity}%</p>
                        <p style={{ fontWeight: "bold", paddingTop: "5px", paddingBottom: "5px", margin: 0 }} >{dateFormat(item.dt)}</p>
                        {/* <p style={{ fontWeight: "bold", }} ><strong>Cloud Cover:</strong> {item.clouds.all}%</p> */}
                        < p style={{ fontWeight: "bold", paddingTop: "5px", paddingBottom: "5px", margin: 0 }} > {item.weather[0].description}</p>
                    </div>
                ))
                }
            </div >
        </div >
    )
}

export default Card
