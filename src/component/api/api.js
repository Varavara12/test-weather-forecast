import * as axios from 'axios'

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

export const weatherAPI = {
    getWeather(city) {

        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&units=metric&mode=json&appid=${openWeatherApiKey}`)
    }
};



