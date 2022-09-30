import { all } from "redux-saga/effects";
// import { ProjectCreateSaga, ProjectCreateSuccessSaga } from "@store/V1/Project/Create/ProjectCreateSaga"
// import { CustomPlanListSaga } from "Redux/V6/CustomPlan/LIST/CustomPlanListSaga"
import { StripeCreateSaga, StripeCreateSuccessSaga } from "Redux/V6/Stripe/Create/StripeCreateSaga"
// import { StripeDeleteSaga,  StripeDeleteSuccessSaga } from "Redux/V6/Stripe/Delete/StripeDeleteSaga";
// import { ProjectDeleteSaga, ProjectDeleteSuccessSaga } from "@store/V1/Project/Delete/ProjectDeleteSaga"
// import { ProjectEditSaga } from "@store/V1/Project/Edit/ProjectEditSaga"
// import { StripeEditSaga, StripeEditSuccessSaga } from "Redux/V6/Stripe/Edit/StripeEditSaga";
// import { ProjectListSaga } from "@store/V1/Project/List/ServiceListSaga"
// import { ProjectEditSaga, ProjectEditSuccessSaga } from "@store/V1/Project/Edit/ServiceEditSaga"
// import { ProjectPaginationSaga } from "@store/V1/Project/Pagination/ServicePaginationSaga"
// import { ProjectCatalogSaga } from "@store/V1/Project/Catalog Status/CatalogStatusSaga"
// import { ProjectStatusSaga } from "@store/V1/Project/ServiceStatus/ServiceStatusSaga"

export default function* StripeRootSaga() {
    yield all([
        StripeCreateSaga(),
        StripeCreateSuccessSaga(),
        // StripeEditSaga(),
        // StripeEditSuccessSaga(),
        // ProjectDeleteSaga(),
        // CustomPlanDeleteSaga(),
        // CustomPlanDeleteSuccessSaga(),
        // ProjectDeleteSuccessSaga(),
        // CustomPlanListSaga(),
        // ProjectEditSaga(),
        // ProjectCreateSaga(),
        // ProjectCreateSuccessSaga(),
        // ProjectEditSaga()
        // ServiceListSaga(),
        // ServiceEditSaga(),
        // ServiceEditSuccessSaga(),
        // ServicePaginationSaga(),
        // ServiceCatalogSaga(),
        // ServiceStatusSaga(),
    ]);
}
