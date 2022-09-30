import { combineReducers } from "redux";
import UnlimitedEditsReducerV6 from "Redux/V6/Sites/Addons/UnlimitedEdits/UnlimitedEditsReducerV6";
const AddonRootReducerV6 = combineReducers({
    unlimited_edits: UnlimitedEditsReducerV6,
});
export default AddonRootReducerV6;
