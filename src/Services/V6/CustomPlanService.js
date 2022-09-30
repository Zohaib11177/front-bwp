import GATEWAY from 'Services/Gateway';
import V6 from 'Constants/V6ApiConstant';

async function CustomPlanPost(data) {
    // const _data = serviceBody(data);
    const _data = postCustomPlanBody(data);
    const response = await GATEWAY.authGateway(
        'POST',
        V6.custom_plan.create,
        _data
    );
    return response;
}
async function CustomPlanEdit(data) {
    const _data = postCustomPlanBody(data);
    const response = await GATEWAY.authGateway(
        'PUT',
        V6.custom_plan.edit + '/' + data.id,
        _data
    );
    return response;
}
async function CustomPlanDelete(data) {
    const response = await GATEWAY.authGateway(
        'DELETE',
        V6.custom_plan.delete + '/' + data
    );
    return response;
}
async function CustomPlanList(data) {
    // const _data = serviceBody(data);

    const response = await GATEWAY.authGateway(
        'GET',
        V6.custom_plan.list,
        null
    );
    return response;
}

// const smartSearchBody = (data) => {
//   let query = "?";
//   query += `${data.field}=${data.value}`;
//   return query;
// };

const postCustomPlanBody = (data) => {
    let _data = {};

    _data.name = data.name;
    _data.is_default = data.is_default;
    _data.amount = data.amount;
    _data.parent_plan_id = data.parent_plan_id;
    _data.addons = data.addons;

    return JSON.stringify(_data);
};

// const editProjectBody = (data) => {
//   let _data = {};

//   _data.name = data.name;

//   return JSON.stringify(_data);
// };
/* const editServiceBody = (data) => {
  let _data = {};

  _data.name = data.name;
  _data.description = data.description;
  _data.image = data.image ? data.image : "";
  _data.subscription_type = data.subscription_type;

  if (data.subscription_type === "one-off") {
    _data.price = data.price_types.price;
    _data.purchase_limit = data.price_types.purchase_limit;
  }

  if (data.subscription_type === "recurring") {
    _data.weekly = data.price_types.weekly;
    _data.monthly = data.price_types.monthly;
    _data.quarterly = data.price_types.quarterly;
    _data.biannually = data.price_types.biannually;
    _data.annually = data.price_types.annually;
    _data.max_concurrent_requests = data.price_types.max_concurrent_requests;
    _data.max_requests_per_month = data.price_types.max_requests_per_month;
  }

  return JSON.stringify(_data);
};

const serviceBody = (data) => {
  let _data = {};

  _data.name = data.name;
  _data.description = data.description;
  _data.image = data.image;
  _data.subscription_type = data.subscription_type;

  if (data.subscription_type === "one-off") {
    _data.price = data.price;
    _data.purchase_limit = data.purchase_limit;
  }

  if (data.subscription_type === "recurring") {
    _data.weekly = data.weekly;
    _data.monthly = data.monthly;
    _data.quarterly = data.quarterly;
    _data.biannually = data.biannually;
    _data.annually = data.annually;
    _data.max_concurrent_requests = data.max_concurrent_requests;
    _data.max_requests_per_month = data.max_requests_per_month;
  }

  return JSON.stringify(_data);
}; */

const CustomPlanService = {
    CustomPlanList,
    CustomPlanPost,
    CustomPlanEdit,
    CustomPlanDelete,
    //   ProjectPost,
    //   ProjectDelete,
    //   ProjectEdit,
};

export default CustomPlanService;
