import { takeEvery, put } from "redux-saga/effects";
import AUTH from "Redux/V1/Auth/AuthActionType";
import logoutAction from "Redux/V1/Auth/Logout/LogoutAction";
import AuthService from "Services/V1/AuthService";
import LogoutHelper from "Helpers/LogoutHelper";

function* logout(data) {
    try {
        const response = yield AuthService.logout(data.request);
        if (response.success) {
            yield put(logoutAction.logoutSuccess(response.data));
        } else {
        }
    } catch (error) {
        console.log(error, "logout-saga-console");
    } finally {
        LogoutHelper.logout();
    }
}

export function* logoutSaga() {
    yield takeEvery(AUTH.LOGOUT, logout);
}
