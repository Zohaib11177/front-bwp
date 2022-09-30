import { all } from "redux-saga/effects";
import { CdnDetailSaga } from "Redux/V1/Sites/Addons/Cdn/First/CdnFirstSaga";
import { CdnCacheSaga } from "Redux/V1/Sites/Addons/Cdn/CdnCache/CdnCacheSaga";
import { NitroDetailSaga } from "Redux/V1/Sites/Addons/Nitro/First/NitroFirstSaga";
import { NitroEnableSaga } from "Redux/V1/Sites/Addons/Nitro/NitroEnable/NitroEnableSaga";
import { NitroDisableSaga } from "Redux/V1/Sites/Addons/Nitro/NitroDisable/NitroDisableSaga";
import { AddonListSaga } from "Redux/V1/Sites/Addons/Get/AddonGetSaga";
import { AddonToggleSaga } from "Redux/V1/Sites/Addons/AddonToggle/AddonToggleSaga";
export default function* AddonRootSaga() {
    yield all([
        CdnDetailSaga(),
        CdnCacheSaga(),
        NitroDetailSaga(),
        NitroEnableSaga(),
        NitroDisableSaga(),
        AddonListSaga(),
        AddonToggleSaga(),
    ]);
}
