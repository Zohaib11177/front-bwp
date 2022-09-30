import { combineReducers } from "redux";
import AlertListReducerV3 from "Redux/V3/SystemAlerts/Get/AlertGetReducerV3";
const AlertRootReducerV3 = combineReducers({
    list: AlertListReducerV3,
});
export default AlertRootReducerV3;
