//根部reducer
import { combineReducers } from 'redux'

import {pageReducer} from './pageReducer'
//import testReducer from './reducerst'
//这里有意使用了combineReducers
const rootReducer = combineReducers({
    page:pageReducer,
});


export  default rootReducer;
