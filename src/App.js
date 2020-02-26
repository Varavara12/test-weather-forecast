import React from 'react';
import './App.css';
import Info from "./component/Info/Info";
import Forecast from "./component/Forecast/Forecast";
import Forms from "./component/Forms/Forms";


function App(props) {
  return (
    <div className="App">
        <div className="main">
            <Info/>
            <Forms addWeather={props.addWeather}/>
            <Forecast weather={props.weather}/>
        </div>
    </div>
  );
}

export default App;
