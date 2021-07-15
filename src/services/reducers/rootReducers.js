import { foodDetails, Language_Reducer } from "./reducer";
import { combineReducers } from 'redux'

export default combineReducers({
    foodDetails,
    lan: Language_Reducer,
})