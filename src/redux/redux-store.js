import {applyMiddleware, combineReducers, createStore} from "redux";
import weatherReducer from "./weatherReducer";
import  thunkMiddleware from  "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    weatherPage: weatherReducer,
    form: formReducer
});


 let store = createStore(reducers, applyMiddleware(thunkMiddleware));

 window.store = store ;

export default store