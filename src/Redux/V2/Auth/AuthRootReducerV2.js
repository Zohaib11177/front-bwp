import { combineReducers } from "redux";
import AccountVerificationReducerV2 from "Redux/V2/Auth/Verification/AccountVerificationResend/AccountVerificationReducerV2";

const AuthRootReducerV2 = combineReducers({
    accountVerificationV2: AccountVerificationReducerV2,
});
export default AuthRootReducerV2;
