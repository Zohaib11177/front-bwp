import { combineReducers } from "redux";
import WordpressUpdateReducerV6 from "Redux/V6/Sites/Wordpress/WordpressUpdate/WordpressUpdateReducerV6";
import WpUpdateAllReducerV6 from "Redux/V6/Sites/Wordpress/WordpressUpdateAll/WordpressUpdateAllReducerV6";
import WordpressLockReducerV6 from "Redux/V6/Sites/Wordpress/WordpressLock/WordpressLockReducerV6";
import WordpressRefreshReducerV6 from "Redux/V6/Sites/Wordpress/WordpressRefresh/WordpressRefreshReducerV6";

const WordpressRootReducerV6 = combineReducers({
    update: WordpressUpdateReducerV6,
    updateAll: WpUpdateAllReducerV6,
    lock: WordpressLockReducerV6,
    refresh: WordpressRefreshReducerV6,
});
export default WordpressRootReducerV6;
