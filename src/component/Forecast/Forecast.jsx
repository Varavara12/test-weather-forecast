import React from 'react';
import s from "./Forecast.module.css"


function Forecast(props) {
    return (
        <div>
            {props.state.city &&
            <div className={s.forecast}>
                <p>Местоположение: {props.state.city}, Страна {props.state.country}</p>
                <p>Температера: {props.state.temp} градусов по Цельсия</p>
                <p>Скорость ветра: {props.state.speed} м.с</p>
                <p>Давление: {props.state.pressure} мм рт. ст.</p>
                <p>Восход солнца: {props.state.sunrise}</p>
                <p>Закат солнца: {props.state.sunset}</p>
            </div>
            }
            <p>{props.state.error}</p>
        </div>
    );
}


export default Forecast