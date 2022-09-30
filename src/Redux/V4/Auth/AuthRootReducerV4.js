import { combineReducers } from "redux";
import LoginReducerV4 from "Redux/V4/Auth/Login/LoginReducerV4";
import RegisterReducerV4 from "Redux/V4/Auth/Register/RegisterReducerV4";

const AuthRootReducerV4 = combineReducers({
    loginV4: LoginReducerV4,
    registerV4: RegisterReducerV4,
});
export default AuthRootReducerV4;
