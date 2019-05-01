import React, { useState, useEffect } from 'react';
import WeatherNow from '../WeatherNow/WeatherNow';
import { Row } from "react-materialize";
import apiKey from '../../config';
import './GetWeather.css';

function GetWeather() {

  const [result, setResult] = useState(null);
  window.setTimeout("window.location.reload();",600000);

  useEffect( () => {
    navigator.geolocation.getCurrentPosition((success) => {
      fetch(`http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${success.coords.latitude},${success.coords.longitude}&days=6`)
      .then(data => data.json())
      .then((data) => {
        setResult(data);
      });
    }, (error) => {
      console.log(error);
    });
  }, [])

  return(
    <div>
      <p className="colorTitle" >{result ? result.location.name : ''}</p>
      <Row>
        <WeatherNow 
          time={'Maintenant'}
          icon={result ? result.current.condition.icon : ''} 
          temp={result ? result.current.temp_c : ''} 
          humidity={result ? result.current.humidity : ''} 
          vent={result ? result.current.wind_mph : ''}
        />
      </Row>
      <hr/>
      <Row>
        {result ? result.forecast.forecastday.map((day, index) => (
          <WeatherNow 
            key={index}
            miliTime={day.date_epoch}
            time={day.date}
            icon={day.day.condition.icon} 
            tempMin={day.day.mintemp_c}
            tempMax={day.day.maxtemp_c} 
            humidity={day.day.avghumidity} 
            vent={day.day.maxwind_mph}
          />
        )) : ''}
      </Row>
    </div>
  )
} 

export default GetWeather;