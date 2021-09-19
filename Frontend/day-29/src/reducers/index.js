import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import placeDataReducer from "./placeDataReducer";

const rootReducer = combineReducers({
    place: placeReducer,
    placeData: placeDataReducer,
});
export default rootReducer;