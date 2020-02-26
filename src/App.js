import React from 'react';
import './App.css';
import Info from "./component/Info/Info";
import Forecast from "./component/Forecast/Forecast";
import WeatherReduxForm from "./component/Forms/Forms";



function App(props) {
  return (
    <div className="App">
        <div className="main">
            <Info/>
            <WeatherReduxForm onSubmit={props.onSubmit}/>
            <Forecast weather={props.weather}/>
        </div>
    </div>
  );
}

export default App;
