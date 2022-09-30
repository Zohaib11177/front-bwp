import { combineReducers } from "redux";
// import ProjectCreateReducer from "@store/V1/Project/Create/ProjectCreateReducer";
// import ProjectDeleteReducer from "@store/V1/Project/Delete/ProjectDeleteReducer";
import CustomPlanDeleteReducer from "Redux/V6/CustomPlan/Delete/CustomPlanDeleteReducer";
import CustomPlanListReducer from "Redux/V6/CustomPlan/LIST/CustomPlanListReducer";
import CustomPlanEditReducer from "Redux/V6/CustomPlan/Edit/CustomPlanEditReducer";
import CustomPlanCreateReducer from "Redux/V6/CustomPlan/Create/CustomPlanCreateReducer";
// import ProjectEditReducer from "@store/V1/Project/Edit/ProjectEditReducer";
// import CustomPlanListReducer from "@store/V1/Project/List/ServiceListReducer";
// import ProjectEditReducer from "@store/V1/Project/Edit/ServiceEditReducer";
// import ProjectPaginationReducer from "@store/V1/Project/Pagination/ServicePaginationReducer";
// import ProjectCatalogReducer from "@store/V1/Project/Catalog Status/CatalogStatusReducer";
// import ProjectStatusReducer from "@store/V1/Project/ServiceStatus/ServiceStatusReducer";

const CustomPlanRootReducer = combineReducers({
  // create: ProjectCreateReducer,
  // delete : ProjectDeleteReducer,
  list : CustomPlanListReducer,
  create:CustomPlanCreateReducer,
  edit:CustomPlanEditReducer,
  delete:CustomPlanDeleteReducer 
  // list : CustomPlanListReducer,
  // edit : ProjectEditReducer,
  // pagination : ProjectPaginationReducer,
  // catalog : ProjectCatalogReducer,
  // service_status : ProjectStatusReducer,
});

export default CustomPlanRootReducer;
