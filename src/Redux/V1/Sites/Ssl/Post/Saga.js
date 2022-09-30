import { takeEvery, put } from "redux-saga/effects";
import SSL_ACTION_TYPE from "Redux/V1/Sites/Ssl/ActionTypes";
import EnableSslAction from "Redux/V1/Sites/Ssl/Post/Actions";
import GetSslAction from "Redux/V1/Sites/Ssl/Get/Actions";
import SslService from "Services/V1/SslService";
import ToastHelper from "Helpers/ToastHelper";
import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* enableSsl(data) {
	try {
		ToastHelper.info();
		const response = yield SslService.enable(
			data.request.form,
			data.request.identity
		);
		if (response.success) {
			ToastHelper.success(response.message);
			setTimeout(() => {
				window.location.reload();
			}, 2000);
			yield put(EnableSslAction.enableSslSuccess(response.data));
			yield put(GetSslAction.getSsl(data.request.identity));
			
		} else {
			ToastHelper.error(response.error.message);
			yield put(EnableSslAction.enableSslFailed(response.error.message));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* enableSslSaga() {
	yield takeEvery(SSL_ACTION_TYPE.ENABLE_SSL, enableSsl);
}
