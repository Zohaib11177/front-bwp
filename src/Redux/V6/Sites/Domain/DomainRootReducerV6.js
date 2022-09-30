import { combineReducers } from "redux";
import DomainPostReducerV6 from "Redux/V6/Sites/Domain/Post/DomainPostReducerV6";
import DomainDeleteReducerV6 from "Redux/V6/Sites/Domain/Delete/DomainDeleteReducerV6";
import DomainPrimaryReducerV6 from "Redux/V6/Sites/Domain/Put/DomainPutReducerV6";
const DomainRootReducerV6 = combineReducers({
    create: DomainPostReducerV6,
    delete: DomainDeleteReducerV6,
    update: DomainPrimaryReducerV6,
});
export default DomainRootReducerV6;
