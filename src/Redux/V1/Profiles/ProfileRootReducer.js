import { combineReducers } from "redux";
import ProfileUpdateReducer from "Redux/V1/Profiles/Put/ProfileUpdateReducer";

const ProfileRootReducer = combineReducers({
    profile: ProfileUpdateReducer,
});

export default ProfileRootReducer;
