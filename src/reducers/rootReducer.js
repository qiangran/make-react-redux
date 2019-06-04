/**
 *这里有意使用了combineReducers
 * **/
import { combineReducers } from 'redux'

import {pageReducer} from './pageReducer'
//import testReducer from './reducerst'
const rootReducer = combineReducers({
    page:pageReducer,
});


export  default rootReducer;
