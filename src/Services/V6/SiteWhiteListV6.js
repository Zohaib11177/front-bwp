import Gateway from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";

const siteWLPost = (data) => {
  const _data = siteWLPostBody(data);
  const response = Gateway.authGateway("POST", V6.whiteLabel.create, _data);
  return response;
};

const siteWLPostBody = (data) => {
  let _data = {};
  if (data.logo_default.substring(0, 4) !== "http") {
    _data.logo = data.logo_default;
  }
  if (data.fav_icon_default.substring(0, 4) !== "http") {
    _data.fav_icon = data.fav_icon_default;
  }
  _data.name = data.agency_name;
  _data.primary_color = data.primary_color;
  _data.secondary_color = data.secondary_color;
  _data.plugin_name = data.plugin_name;
  _data.domain = data.domain;
  return JSON.stringify(_data);
};

const siteWLPut = (data) => {
  const _data = siteWLPutBody(data);
  const response = Gateway.authGateway("PUT", V6.whiteLabel.updateSSL, _data);
  return response;
};

const siteWLPutBody = (data) => {
  let _data = {};
  return JSON.stringify(_data);
};

const siteWLGet = () => {
  const response = Gateway.authGateway("GET", V6.whiteLabel.get);
  return response;
};

const SiteWhiteListV6 = {
  siteWLPost,
  siteWLPut,
  siteWLGet,
};
export default SiteWhiteListV6;
