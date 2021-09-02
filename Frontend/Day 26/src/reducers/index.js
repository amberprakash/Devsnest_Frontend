import counterReducer from "./counterReducer";

import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const rootReducers = combineReducers({
    counter:counterReducer,
    data:dataReducer,
});
export default rootReducers;
