import { combineReducers } from "redux";
import { buildingReducer } from './buildings'

export default combineReducers({
    buildings: buildingReducer
})