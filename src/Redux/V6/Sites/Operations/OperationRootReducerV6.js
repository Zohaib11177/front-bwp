import { combineReducers } from "redux";
import CacheClearAllReducerV6 from "Redux/V6/Sites/Operations/CacheAllClear/CacheAllClearReducerV6";

const OperationRootReducerV6 = combineReducers({
    cacheAllClear: CacheClearAllReducerV6,
});
export default OperationRootReducerV6;
