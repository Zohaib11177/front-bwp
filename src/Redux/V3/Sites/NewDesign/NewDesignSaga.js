import DESIGN from 'Redux/V3/Sites/NewDesign/NewDesignActionType';
import { takeEvery } from 'redux-saga/effects';
import {
    newDesignFailed,
    newDesignSuccess,
} from 'Redux/V3/Sites/NewDesign/NewDesignAction';
import { put } from 'redux-saga/effects';

function* newDesign(data) {
    try {
        const response = 'taimoor'; //api response
        if (response) {
            yield put(newDesignSuccess(response));
            console.log('saga success');
        } else {
            yield put(newDesignFailed());
        }
    } catch (error) {}
}

export function* newDesignSaga() {
    yield takeEvery(DESIGN.NEW_DESIGN, newDesign);
}
