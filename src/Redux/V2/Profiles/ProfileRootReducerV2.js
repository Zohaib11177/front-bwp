import { combineReducers } from "redux";
import ProfileUpdateReducerV2 from "Redux/V2/Profiles/Put/ProfilePutReducerV2";

const ProfileRootReducerV2 = combineReducers({
    profileUpdate: ProfileUpdateReducerV2,
});

export default ProfileRootReducerV2;
