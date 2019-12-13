import { combineReducers } from "redux";
import { city } from "./city.js";
import { weather } from "./weather";

const rootReducer = combineReducers({
  city,
  weather
});

export default rootReducer;
