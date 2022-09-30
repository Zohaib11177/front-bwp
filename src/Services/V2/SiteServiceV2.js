import Gateway from 'Services/Gateway';
import V2 from 'Constants/V2ApiConstant';
import V1 from 'Constants/V1ApiConstant';

const siteCosting = (data) => {
    const apiData = {
        product_ids: data.product_ids,
        cloud_provider_id: parseInt(data.cloud_provider_id),
        plan_id: parseInt(data.plan_id),
    };
    const response = Gateway.authGateway(
        'POST',
        `${V2.site.costing}`,
        JSON.stringify(apiData)
    );
    return response;
};

const siteDelete = (identity) => {
    const response = Gateway.gatewaySiteService(
        'DELETE',
        `${V1.site_operation.site_delete}${identity}`
    );
    return response;
};

const SiteServiceV2 = {
    siteCosting,
    siteDelete,
};
export default SiteServiceV2;
