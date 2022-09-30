import { all } from "redux-saga/effects";
import { WordpressListSaga } from "Redux/V1/Sites/Wordpress/Get/WordpressGetSaga";
import { WordpressLockSaga } from "Redux/V1/Sites/Wordpress/WordpressLock/WordpressLockSaga";
import { WordpressRefreshSaga } from "Redux/V1/Sites/Wordpress/WordpressRefresh/WordpressRefreshSaga";
import { WordpressUpdateSaga } from "Redux/V1/Sites/Wordpress/WordpressUpdate/WordpressUpdateSaga";
import { WpUpdateAllSaga } from "Redux/V1/Sites/Wordpress/WordpressUpdateAll/WordpressUpdateAllSaga";
import { WordpressContainerSaga } from "Redux/V1/Sites/Wordpress/WordpressContainer/WordpressContainerSaga";
import { WordpressContainerSagaV1 } from "Redux/V1/Sites/Wordpress/WordpressContainerV1/WordpressContainerSagaV1";
import { WpUpdateAllSagaV1 } from "Redux/V1/Sites/Wordpress/WordpressUpdateAllV1/WordpressUpdateAllSagaV1";
import { WordpressTimelineSaga } from "Redux/V1/Sites/Wordpress/WordpressTimeline/WordpressTimelineSaga";

export default function* WordpressRootSaga() {
    yield all([
        WordpressListSaga(),
        WordpressLockSaga(),
        WordpressRefreshSaga(),
        WordpressUpdateSaga(),
        WpUpdateAllSaga(),
        WordpressContainerSaga(),
        WordpressContainerSagaV1(),
        WpUpdateAllSagaV1(),
        WordpressTimelineSaga(),
    ]);
}
