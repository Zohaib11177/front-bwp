import { all } from "redux-saga/effects";
import { domainPostSagaV6 } from "Redux/V6/Sites/Domain/Post/DomainPostSagaV6";
import { domainPutSagaV6 } from "Redux/V6/Sites/Domain/Put/DomainPutSagaV6";
import { domainDeleteSagaV6 } from "Redux/V6/Sites/Domain/Delete/DomainDeleteSagaV6";
function* DomainRootSagaV6() {
    yield all([domainDeleteSagaV6(), domainPostSagaV6(), domainPutSagaV6()]);
}
export default DomainRootSagaV6;
