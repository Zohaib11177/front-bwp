import { all } from "redux-saga/effects";
import {
    LoginSagaV6,
    LoginSuccessSagaV6,
    LoginFailedSagaV6,
} from "Redux/V6/Auth/Login/LoginSagaV6";
import {
    RegisterSagaV6,
    RegisterSuccessSagaV6,
    RegisterFailedSagaV6,
} from "Redux/V6/Auth/Register/RegisterSagaV6";
export default function* AuthRootSagaV6() {
    yield all([
        LoginSagaV6(),
        LoginSuccessSagaV6(),
        LoginFailedSagaV6(),
        RegisterSagaV6(),
        RegisterSuccessSagaV6(),
        RegisterFailedSagaV6()
    ]);
}
