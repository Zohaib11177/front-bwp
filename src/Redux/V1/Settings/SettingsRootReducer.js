import { combineReducers } from "redux";
import NerdModeReducer from "Redux/V1/Settings/NerdMode/NerdModeReducer";
import ServiceListReducer from "Redux/V1/Settings/Services/Get/ServiceGetReducer";
import WhiteLabelDetailReducer from "Redux/V1/Settings/WhiteLabel/Get/WhiteLabelGetReducer";
import WhiteLabelCreateReducer from "Redux/V1/Settings/WhiteLabel/Post/WhiteLabelPostReducer";
import WhiteLabelToggleReducer from "Redux/V1/Settings/WhiteLabelToggle/WhiteLabelToggleReducer";

const SettingsRootReducer = combineReducers({
    nerdMode: NerdModeReducer,
    servicesList: ServiceListReducer,
    detail: WhiteLabelDetailReducer,
    create: WhiteLabelCreateReducer,
    whiteLabelToggle: WhiteLabelToggleReducer,
});
export default SettingsRootReducer;
