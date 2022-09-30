import { all } from "redux-saga/effects";
import {
    registerPostSaga,
    registerPostSuccessSaga,
} from "Redux/V3/Auth/Register/Post/RegisterPostSaga";

export default function* AuthRootSaga3() {
    yield all([registerPostSaga(), registerPostSuccessSaga()]);
}
