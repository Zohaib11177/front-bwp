import { takeEvery, put } from 'redux-saga/effects';
import WORDPRESS from 'Redux/V1/Sites/Wordpress/ActionType';
import WordpressUpdateAction from 'Redux/V1/Sites/Wordpress/WordpressUpdate/WordpressUpdateAction';
import WordpressListAction from 'Redux/V1/Sites/Wordpress/Get/WordpressGetAction';
import WordpressContainerAction from 'Redux/V1/Sites/Wordpress/WordpressContainer/WordpressContainerAction';
import WordpressService from 'Services/V1/WordpressService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteUpdatesBusiness from 'Businesses/SiteDetails/SiteUpdatesBusiness';

function* wordpressUpdate(data) {
    try {
        ToastHelper.info();
        console.log(data, 'data');
        const response = yield WordpressService.wordpressUpdate(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                WordpressUpdateAction.wordpressUpdateSuccess(data.request)
            );
            if (data.request.trigger === 'content_all') {
                yield put(
                    WordpressContainerAction.wordpressContainer(
                        data.request.identity
                    )
                );
            } else {
                yield put(
                    WordpressListAction.wordpressGet(data.request.identity)
                );
            }
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WordpressUpdateAction.wordpressUpdateFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(WordpressUpdateAction.wordpressUpdateFailed());
    }
}

export function* WordpressUpdateSaga() {
    yield takeEvery(WORDPRESS.WORDPRESS_UPDATE, wordpressUpdate);
}
