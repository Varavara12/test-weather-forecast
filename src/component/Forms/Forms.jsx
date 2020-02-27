import React from 'react';
import s from './Forms.module.css'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {FormsControls} from "../common/FormsControls/FormsControls";

const Forms =(props) => {
    return (
        <div className={s.form}>
            <form className={s.form_pos} onSubmit={props.handleSubmit}>
                <Field component={FormsControls} type={"text"} validate={[required]} name={"city"} placeholder={"Выберите город"}/>
                <button>Получить</button>
            </form>
        </div>
    );
};

const WeatherReduxForm = reduxForm({
    form: 'weather'
}) (Forms);


export default WeatherReduxForm