import React from 'react';
import { Col, Card } from "react-materialize";
import getDay from '../../date';
import './WeatherNow.css';

const WeatherNow = (props) => {
  return(
      <Col l={4} m={6} s={12} offset={props.time === 'Maintenant' ? "l4 m3" : ''}>
        <Card horizontal >
          <p className='sizeDay'>{ props.miliTime ? getDay(props.miliTime) : ''}</p>
          <p className={props.time === 'Maintenant' ? 'sizeDay' : ''}>{props.time}</p>
          <p><img src={props.icon} alt='wheather'/></p>
          <p className='tempSize'>Temp : {props.temp ? props.temp : `${props.tempMax} / ${props.tempMin}`} °C</p>
          <p>Humidité : {props.humidity} %</p>
          <p>Vent : {props.vent} km/h</p>
        </Card>
      </Col>
  )
}

export default WeatherNow;