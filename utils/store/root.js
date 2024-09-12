import {combineReducers} from "redux";
import utilsReducer from "./utils-store/utils-store-reducer";

export const rootReducer = combineReducers({
    utilsStore: utilsReducer,

})