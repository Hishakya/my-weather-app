

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
        <div style={{ backgroundColor: "grey", width: "160px", borderRadius: "6px", padding: "30px" }}>
            <p style={{ fontWeight: "bold" }}>Five days Forecast</p>
            <div>
                {filteredData?.map((item, index) => (
                    <div key={index} className="weather-item">
                        <p><strong>Temp:</strong> {Math.round(item.main.temp)}°c</p>
                        <p><strong>Date:</strong>{dateFormat(item.dt)}</p>
                        <p><strong>Cloud Cover:</strong> {item.clouds.all}%</p>
                        <p><strong>Desc:</strong> {item.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/w/${item?.weather[0].icon}.png`} alt="img" />
                        {index < filteredData.length - 1 && (
                            <hr style={{
                                border: '0',
                                borderTop: '1px solid #ccc',
                                margin: '10px 0'
                            }} />
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Card
