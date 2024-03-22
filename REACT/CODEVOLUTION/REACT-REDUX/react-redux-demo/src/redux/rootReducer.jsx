import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IcecreamReducer from "./Icecream/IcecreamReducer";
import UserReducer from "./user/UserReducer";
const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IcecreamReducer,
  user: UserReducer,
});

export default rootReducer;
