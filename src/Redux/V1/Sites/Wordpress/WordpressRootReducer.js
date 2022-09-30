import { combineReducers } from "redux";
import WordpressListReducer from "Redux/V1/Sites/Wordpress/Get/WordpressGetReducer";
import WordpressLockReducer from "Redux/V1/Sites/Wordpress/WordpressLock/WordpressLockReducer";
import WordpressRefreshReducer from "Redux/V1/Sites/Wordpress/WordpressRefresh/WordpressRefreshReducer";
import WordpressUpdateReducer from "Redux/V1/Sites/Wordpress/WordpressUpdate/WordpressUpdateReducer";
import WpUpdateAllReducer from "Redux/V1/Sites/Wordpress/WordpressUpdateAll/WordpressUpdateAllReducer";
import WordpressContainerReducer from "Redux/V1/Sites/Wordpress/WordpressContainer/WordpressContainerReducer";
import WordpressContainerReducerV1 from "Redux/V1/Sites/Wordpress/WordpressContainerV1/WordpressContainerReducerV1";
import WpUpdateAllReducerV1 from "Redux/V1/Sites/Wordpress/WordpressUpdateAllV1/WordpressUpdateAllReducerV1";
import WordpressTimelineReducer from "Redux/V1/Sites/Wordpress/WordpressTimeline/WordpressTimelineReducer";

const WordpressRootReducer = combineReducers({
    list: WordpressListReducer,
    lock: WordpressLockReducer,
    refresh: WordpressRefreshReducer,
    update: WordpressUpdateReducer,
    updateAll: WpUpdateAllReducer,
    container: WordpressContainerReducer,
    containerV1: WordpressContainerReducerV1,
    updateAllV1: WpUpdateAllReducerV1,
    timeline: WordpressTimelineReducer,
});
export default WordpressRootReducer;
