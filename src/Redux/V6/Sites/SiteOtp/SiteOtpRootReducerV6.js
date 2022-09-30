import { combineReducers } from "redux";
import SiteOtpGetReducerV6 from "Redux/V6/Sites/SiteOtp/Get/SiteGetReducerV6";
import SiteOtpPutReducerV6 from "Redux/V6/Sites/SiteOtp/Put/SitePutReducerV6";

const SiteVersionRootReducerV6 = combineReducers({
    list : SiteOtpGetReducerV6,
    update: SiteOtpPutReducerV6,
});

export default SiteVersionRootReducerV6;
