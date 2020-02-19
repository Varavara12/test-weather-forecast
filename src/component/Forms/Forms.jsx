import React from 'react';

function Forms(props) {
    return (
        <div>
            <form onSubmit={props.addWeather}>
                <input type="text" name="city" placeholder="Выберите город"/>
                <button>Получить</button>
            </form>
        </div>
    );
}


export default Forms