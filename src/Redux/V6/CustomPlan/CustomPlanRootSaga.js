import { all } from "redux-saga/effects";
// import { ProjectCreateSaga, ProjectCreateSuccessSaga } from "@store/V1/Project/Create/ProjectCreateSaga"
import { CustomPlanListSaga } from "Redux/V6/CustomPlan/LIST/CustomPlanListSaga"
import { CustomPlanCreateSaga, CustomPlanCreateSuccessSaga } from "Redux/V6/CustomPlan/Create/CustomPlanCreateSaga"
import { CustomPlanDeleteSaga,  CustomPlanDeleteSuccessSaga } from "Redux/V6/CustomPlan/Delete/CustomPlanDeleteSaga";
// import { ProjectDeleteSaga, ProjectDeleteSuccessSaga } from "@store/V1/Project/Delete/ProjectDeleteSaga"
// import { ProjectEditSaga } from "@store/V1/Project/Edit/ProjectEditSaga"
import { CustomPlanEditSaga, CustomPlanEditSuccessSaga } from "Redux/V6/CustomPlan/Edit/CustomPlanEditSaga";
// import { ProjectListSaga } from "@store/V1/Project/List/ServiceListSaga"
// import { ProjectEditSaga, ProjectEditSuccessSaga } from "@store/V1/Project/Edit/ServiceEditSaga"
// import { ProjectPaginationSaga } from "@store/V1/Project/Pagination/ServicePaginationSaga"
// import { ProjectCatalogSaga } from "@store/V1/Project/Catalog Status/CatalogStatusSaga"
// import { ProjectStatusSaga } from "@store/V1/Project/ServiceStatus/ServiceStatusSaga"

export default function* CustomPlanRootSaga() {
    yield all([
        CustomPlanCreateSaga(),
        CustomPlanCreateSuccessSaga(),
        CustomPlanEditSaga(),
        CustomPlanEditSuccessSaga(),
        // ProjectDeleteSaga(),
        CustomPlanDeleteSaga(),
        CustomPlanDeleteSuccessSaga(),
        // ProjectDeleteSuccessSaga(),
        CustomPlanListSaga(),
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
