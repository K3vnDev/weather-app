/* eslint-disable react/prop-types */
import './weatherCard.css'


function WeatherCard ({ data, error }) {
  if (error) return (
    <p className='error-msg'>
      City not found ❌
    </p>
  )
  if (!data) return


  const wrapperClass = `card-wrapper ${data.isDay == 1? 'day':'night'}`
    
  return (
    <div className={wrapperClass}>
      <div className="card">
        <section className="left-side">
          <div>
            <h4 className="date-and-time">
              {data.dateAndTime}
            </h4>
            <h3 className="location">
              {data.location}
            </h3>
          </div>
          <div>
            <h5>Wind: {data.wind}</h5>
            <h5>Humidity: {data.humidity}</h5>
          </div>
        </section>
        <section className="right-side">
          <img src={data.icon} alt="Weather Icon" />
          <div className='temp-container'>
            <h2>{data.temp}</h2>
            <p>°C</p>
          </div>
          <h3 className="contition">{data.condition}</h3>
        </section>
      </div>
    </div>
  )
}

export default WeatherCard