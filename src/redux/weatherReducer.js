import {weatherAPI} from "../component/api/api";

const SET_WEATHER = 'SET_WEATHER';

let initialState = {
    weather: null

};

const weatherReducer = (state = initialState, action) => {

    switch (action.type) {
        case  SET_WEATHER:
            return {
                ...state,
                weather: action.weather
            };
        default:
            return state
    }
};

export const setWeatherPage = (weather) => ({type: SET_WEATHER, weather});

export const getWeatherThunk = (city) => {
    
    return (dispatch) => {
        weatherAPI.getWeather(city).then(response => {
            dispatch(setWeatherPage(response.data))
        })
    }
};

export default weatherReducer