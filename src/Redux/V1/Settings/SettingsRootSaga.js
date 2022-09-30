import { all } from "redux-saga/effects";
import { NerdModeSaga } from "Redux/V1/Settings/NerdMode/NerdModeSaga";
import { ServiceListSaga } from "Redux/V1/Settings/Services/Get/ServiceGetSaga";
import { whiteLabelDetailSaga } from "Redux/V1/Settings/WhiteLabel/Get/WhiteLabelGetSaga";
import { whiteLabelPostSaga } from "Redux/V1/Settings/WhiteLabel/Post/WhiteLabelPostSaga";
import { whiteLabelToggleSaga } from "Redux/V1/Settings/WhiteLabelToggle/WhiteLabeToggleSaga";
export default function* SettingsRootSaga() {
    yield all([
        NerdModeSaga(),
        ServiceListSaga(),
        whiteLabelDetailSaga(),
        whiteLabelPostSaga(),
        whiteLabelToggleSaga(),
    ]);
}
