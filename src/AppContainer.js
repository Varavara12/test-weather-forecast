import React from 'react';
import App from "./App";
import * as axios from 'axios'
import {connect} from "react-redux";
import {setWeatherPage} from "./redux/weatherReducer";
const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

class AppContainer extends React.Component {
   

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&units=metric&mode=json&appid=${openWeatherApiKey}`)
            .then(response => {
                this.props.setWeatherPage(response.data)
            })
    }

    addWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;

        /*if (city) {
            /!*const weatherApiLink = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${openWeatherApiKey}`)
            const dataJson = await weatherApiLink.json();
            console.log(dataJson)*!/

            let sunset = dataJson.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            let sunrise = dataJson.sys.sunrise;
            let date_sunrise = new Date();
            date_sunrise.setTime(sunrise);
            let sunrise_date = date_sunrise.getHours() + ":" + date_sunrise.getMinutes() + ":" + date_sunrise.getSeconds();

            this.setState({
                city: dataJson.name,
                country: dataJson.sys.country,
                temp: dataJson.main.temp,
                speed: dataJson.wind.speed,
                pressure: dataJson.main.pressure,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: null
            })
        } else {
            this.setState({
                city: null,
                country: null,
                temp: null,
                speed: null,
                sunrise: null,
                sunset: null,
                error: "Введите название города"
            })
        }*/
    };

    render() {
        return (
            <App addWeather={this.addWeather} weather={this.props.weather}/>
        )
    }
}

let mapStateToProps = (state) => ({
    weather: state.weatherPage.weather
});

export default connect (mapStateToProps, {setWeatherPage}) (AppContainer)