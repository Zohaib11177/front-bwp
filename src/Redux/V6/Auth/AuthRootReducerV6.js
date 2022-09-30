import { combineReducers } from "redux";
import LoginReducerV6 from "Redux/V6/Auth/Login/LoginReducerV6";
import RegisterReducerV6 from "Redux/V6/Auth/Register/RegisterReducerV6";

const AuthRootReducerV6 = combineReducers({
    loginV6: LoginReducerV6,
    registerV6: RegisterReducerV6,
});
export default AuthRootReducerV6;
