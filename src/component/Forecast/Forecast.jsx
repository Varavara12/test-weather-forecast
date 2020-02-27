import React from 'react';
import s from "./Forecast.module.css"


const Forecast = (props) => {
    if(!props.weather){
        return <div> </div>
    }
    return (
        <div>
            {props.weather.name &&
            <div className={s.forecast}>
                <p>Местоположение: {props.weather.name}, Страна {props.weather.sys.country}</p>
                <p>Температера: {props.weather.main.temp} градусов по Цельсия</p>
                <p>Скорость ветра: {props.weather.wind.speed} м.с</p>
                <p>Давление: {props.weather.main.pressure} мм рт. ст.</p>
            </div>
            }
        </div>
    );
};


export default Forecast