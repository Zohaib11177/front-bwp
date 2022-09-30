import QueryParams from "Helpers/QueryParamsHelper";
import BrowserInfo from "Helpers/BrowserInfoHelper";
import React from "react";
import TimeStampHelper from "Helpers/TimeStampHelper";
import StringHelper from "Helpers/StringHelper";
import "Assets/css/affiliate.css";
import "Assets/css/Responsive/affiliate.css";

const queryParams = async (data) => {
    let query = data.location.search;
    query = query.replace("?", "", query);
    let queryObject = QueryParams.queryGet(query);
    const browser = BrowserInfo.browser();

    try {
        const affiliate = {
            browser: browser.browser.name,
            operating_system: browser.browser.os,
            affiliate_id: queryObject.aff_id,
            campaign_id: queryObject.campaign_id,
            ip_address: "252.12.1.0.1",
            custom_attributes: {
                data_1: queryObject.data_1,
                data_2: queryObject.data_2,
                data_3: queryObject.data_3,
                data_4: queryObject.data_4,
            },
        };
        localStorage.setItem("affiliate", JSON.stringify(affiliate));
    } catch {
        console.log("affiliate business error");
    }
};
const generate = (data) => {
    return data.map((affiliate, index) => {
        return (
            <tr key={affiliate.id}>
                <td data-label="#" className="clicks-index">
                    {" "}
                    {index + 1}
                </td>
                {affiliate.unique_id ? (
                    <td data-label="Unique Id">
                        {StringHelper.emptyCheck(
                            affiliate.unique_id,
                            affiliate._id
                        )}
                    </td>
                ) : (
                    ""
                )}
                {affiliate.operating_system ? (
                    <td data-label="Browser">
                        {StringHelper.emptyCheck(
                            affiliate.operating_system,
                            affiliate.os
                        )}
                    </td>
                ) : (
                    <td data-label="Browser">
                        <p className=" dash">-</p>
                    </td>
                )}

                <td data-label="Data 1">
                    {StringHelper.emptyCheck(
                        affiliate.browser,
                        <p className="dash">-</p>
                    )}
                </td>
                <td data-label="Data 2">
                    {StringHelper.emptyCheck(
                        affiliate.data_1,
                        <p className="dash">-</p>
                    )}
                </td>
                <td data-label="Data 3">
                    {StringHelper.emptyCheck(
                        affiliate.data_2,
                        <p className="dash">-</p>
                    )}
                </td>
                <td data-label="Data 4">
                    {StringHelper.emptyCheck(
                        affiliate.data_3,
                        <p className="dash">-</p>
                    )}
                </td>
                <td data-label="Data 5">
                    {StringHelper.emptyCheck(
                        affiliate.data_4,
                        <p className="dash">-</p>
                    )}
                </td>
                <td data-label="Date">
                    {TimeStampHelper.standardDateFormat(
                        StringHelper.emptyCheck(
                            affiliate.created_at,
                            affiliate.createdAt
                        )
                    )}
                </td>
            </tr>
        );
    });
};
const AffiliateBusiness = {
    queryParams,
    generate,
};

export default AffiliateBusiness;
