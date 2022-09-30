import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
import WordpressTimelineAction from "Redux/V1/Sites/Wordpress/WordpressTimeline/WordpressTimelineAction";
import WordpressService from "Services/V1/WordpressService";

function* wordpressTimeline(data) {
    try {
        const response = yield WordpressService.wordpressTimeline(data.request);
        if (response.success) {
            yield put(
                WordpressTimelineAction.wordpressTimelineSuccess(response.data)
            );
        } else {
            yield put(
                WordpressTimelineAction.wordpressTimelineFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* WordpressTimelineSaga() {
    yield takeEvery(WORDPRESS.WORDPRESS_TIMELINE, wordpressTimeline);
}
