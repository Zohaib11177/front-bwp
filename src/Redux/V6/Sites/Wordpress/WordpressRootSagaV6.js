import { all } from "redux-saga/effects";

import { WordpressUpdateSagaV6 } from "Redux/V6/Sites/Wordpress/WordpressUpdate/WordpressUpdateSagaV6";
import { WpUpdateAllSagaV6 } from "Redux/V6/Sites/Wordpress/WordpressUpdateAll/WordpressUpdateAllSagaV6";
import { WordpressLockSagaV6 } from "Redux/V6/Sites/Wordpress/WordpressLock/WordpressLockSagaV6";
import { WordpressRefreshSagaV6 } from "Redux/V6/Sites/Wordpress/WordpressRefresh/WordpressRefreshSagaV6";

export default function* WordpressRootSagaV6() {
    yield all([
        WordpressUpdateSagaV6(),
        WpUpdateAllSagaV6(),
        WordpressLockSagaV6(),
        WordpressRefreshSagaV6(),
    ]);
}
