import { applyMiddleware, legacy_createStore } from "redux";
import {rootReducer} from './reducerWeather';
import thunk from 'redux-thunk';


let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;