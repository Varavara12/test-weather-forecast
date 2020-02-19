import React from 'react';


function Forecast(props) {
    return (
        <div>
            {props.state.city &&
            <div>
                <p>Местоположение: {props.state.city}, Страна {props.state.country}</p>
                <p>Температера: {props.state.temp}</p>
                <p>Скорость ветра: {props.state.speed}</p>
                <p>Давление: {props.state.pressure}</p>
                <p>Восход солнца: {props.state.sunrise}</p>
                <p>Закат солнца: {props.state.sunset}</p>
            </div>
            }
            <p>{props.state.error}</p>
        </div>
    );
}


export default Forecast