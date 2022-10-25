import { combineReducers } from "redux";
import Todos from './todoReducer'

 const rootReducer = combineReducers({
    Todos,
 });

 export default rootReducer;