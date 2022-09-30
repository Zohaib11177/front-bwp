import { combineReducers } from "redux";
import logoutReducer from "Redux/V1/Auth/Logout/LogoutReducer";
import AccVerificationResendReducer from "Redux/V1/Auth/Verification/AccountVerificationResend/AccVerificationResendReducer";

const AuthRootReducer = combineReducers({
    logout: logoutReducer,
    accVerificationResend: AccVerificationResendReducer,
});
export default AuthRootReducer;
