import { rootReducer } from "./reducers";
import {legacy_createStore} from 'redux'

let store = legacy_createStore(rootReducer)

export  {store};