import React from 'react';
import './App.css';
import Info from "./component/Info/Info";
import Forms from "./component/Forms/Forms";
import Forecast from "./component/Forecast/Forecast";

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

function App() {

  addWeather = async () => {
        const weatherApiLink = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&units=metric&mode=json&appid=${openWeatherApiKey}`)
            const dataJson = await weatherApiLink.json()
    };

  return (
    <div className="App">
      <header className="App-header">

      </header>
       <Info/>
       <Forms addWeather={this.addWeather}/>
       <Forecast/>
    </div>
  );
}

export default App;
