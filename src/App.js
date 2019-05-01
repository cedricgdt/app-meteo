import React from 'react';
import GetWeather from './Components/GetWeather/GetWeather';
import M from '../node_modules/materialize-css/dist/js/materialize.js';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <GetWeather />
    </div>
  );
}

export default App;
