import React from 'react';
import s from './Forms.module.css'

function Forms(props) {
    return (
        <div className={s.form}>
            <form onSubmit={props.addWeather}>
                <input type="text" name="city" placeholder="Выберите город"/>
                <button>Получить</button>
            </form>
        </div>
    );
}


export default Forms