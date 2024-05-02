import {combineReducers} from "redux";

import userReducer from "./user/slice";
import cartReducer from "./cart/slice";

const rootReducer = combineReducers({user: userReducer, cart: cartReducer});

export default rootReducer;
