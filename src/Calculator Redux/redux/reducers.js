import {calculatorReducer, CALCULATOR_KEY} from './CalCRedux/calReducers';
import {combineReducers} from 'redux';


let rootReducer = combineReducers({
    [CALCULATOR_KEY]:calculatorReducer
})

export {rootReducer};