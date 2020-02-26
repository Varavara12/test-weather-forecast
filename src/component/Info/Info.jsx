import React from 'react';
import s from './Info.module.css'

const Info = (props) => {
    return (
        <div className={s.info}>
            <h2>Прогноз погоды</h2>
            <p>Узнайте погоду в вашем городе.</p>
        </div>
    )
};

export default Info