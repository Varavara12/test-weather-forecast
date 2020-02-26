import React from 'react';
import App from "./App";
import {connect} from "react-redux";
import {getWeatherThunk} from "./redux/weatherReducer";


class AppContainer extends React.Component {

    onSubmit = (city) => {
        this.props.getWeatherThunk(city)
    };

    render() {
        return (
            <App onSubmit={this.onSubmit} weather={this.props.weather}/>
        )
    }
}

let mapStateToProps = (state) => ({
    weather: state.weatherPage.weather
});

export default connect (mapStateToProps, {getWeatherThunk}) (AppContainer)