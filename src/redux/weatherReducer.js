const SET_WEATHER = 'SET_WEATHER';

let initialState = {
    weather: null

};

const weatherReducer = (state = initialState, action) =>{

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

export const setWeatherPage = (weather) =>({type: SET_WEATHER, weather});


export default weatherReducer