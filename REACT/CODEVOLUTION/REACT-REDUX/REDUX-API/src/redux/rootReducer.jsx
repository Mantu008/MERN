import { combineReducers } from "redux";
import UserReducer from "./user/UserReducer";
const rootReducer = combineReducers({
  user: UserReducer,
});

export default rootReducer;
