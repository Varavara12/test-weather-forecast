import React from 'react';
import s from './Forms.module.css'
import {Field, reduxForm} from "redux-form";

const Forms =(props) => {
    return (
        <div className={s.form}>
            <form onSubmit={props.handleSubmit}>
                <Field component={"input"} type={"text"} name={"city"} placeholder={"Выберите город"}/>
                <button>Получить</button>
            </form>
        </div>
    );
};

const WeatherReduxForm = reduxForm({
    form: 'weather'
}) (Forms);


export default WeatherReduxForm