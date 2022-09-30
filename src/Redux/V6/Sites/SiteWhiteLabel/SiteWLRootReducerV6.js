import { combineReducers } from "redux";
import SiteWLGetReducerV6 from "Redux/V6/Sites/SiteWhiteLabel/Get/SiteWLReducerV6";
import SitePostReducerV6 from "Redux/V6/Sites/SiteWhiteLabel/Post/SitePostReducerV6";
import SiteWLPutReducerV6 from "./PUT/SitePutReducerV6";

const SiteVersionRootReducerV6 = combineReducers({
    list : SiteWLGetReducerV6,
    post: SitePostReducerV6,
    put: SiteWLPutReducerV6,
});

export default SiteVersionRootReducerV6;
