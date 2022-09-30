import { all } from "redux-saga/effects";
import {
    LoginSagaV4,
    LoginSuccessSagaV4,
    LoginFailedSagaV4,
} from "Redux/V4/Auth/Login/LoginSagaV4";
import {
    RegisterSagaV4,
    RegisterSuccessSagaV4,
    RegisterFailedSagaV4,
} from "Redux/V4/Auth/Register/RegisterSagaV4";
export default function* AuthRootSagaV4() {
    yield all([
        LoginSagaV4(),
        LoginSuccessSagaV4(),
        LoginFailedSagaV4(),
        RegisterSagaV4(),
        RegisterSuccessSagaV4(),
        RegisterFailedSagaV4(),
    ]);
}
