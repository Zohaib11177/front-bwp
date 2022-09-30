import GATEWAY from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";

async function StripePost(data) {
  // const _data = serviceBody(data);
  const _data = postStripeBody(data);
  const response = await GATEWAY.authGateway("POST",V6.stripe.create, _data);
  return response;
}


// const smartSearchBody = (data) => {
//   let query = "?";
//   query += `${data.field}=${data.value}`;
//   return query;
// };

const postStripeBody = (data) => {
  let _data = {};
  
  _data.stripe_key = data.stripe_key;
  _data.stripe_secret = data.stripe_secret;
  

  return JSON.stringify(_data);
};

// const editProjectBody = (data) => {
//   let _data = {};

//   _data.name = data.name;

//   return JSON.stringify(_data);
// };


const StripeService = {
   
    StripePost,
};

export default StripeService;
