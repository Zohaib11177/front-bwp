import { all } from "redux-saga/effects";
import { CdnEnableSagaV2 } from "Redux/V2/Sites/Addons/Cdn/CdnEnable/CdnEnableSagaV2";
import { CdnDisableSagaV2 } from "Redux/V2/Sites/Addons/Cdn/CdnDisable/CdnDisableSagaV2";
import { CdnUpdateSagaV2 } from "Redux/V2/Sites/Addons/Cdn/Put/CdnPutSagaV2";

export default function* AddonRootSagaV2() {
    yield all([CdnEnableSagaV2(), CdnDisableSagaV2(), CdnUpdateSagaV2()]);
}
