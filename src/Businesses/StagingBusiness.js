import React from "react";
import TimeStampHelper from "Helpers/TimeStampHelper";
import CapitilizeHelper from "Helpers/CapitilizeHelper";

const stagingRedirect = (data) => {
    if (data === "staging") {
        window.location.href = "/404";
    }
};
const stagingLogsRedirect = (data) => {
    if (data !== "staging" && data !== undefined) {
        window.location.href = "/404";
    }
};

const logsGenerate = (logs) => {
    let logsList = logs || [];
    return logsList.map((logs) => {
        return (
            <tr className="timeline-table-main">
                <td data-label="Action By">
                    <div className="m-0">
                        <b>{logs.creator.email}</b>{" "}
                        {` performed ${
                            logs.request.environment === "live"
                                ? "push operation"
                                : "pull operation"
                        } on ${logs.container.identity} `}
                    </div>
                </td>
                <td data-label="Type">
                    <div className="m-0">
                        {" "}
                        {CapitilizeHelper.capital(logs.request.action)}{" "}
                    </div>
                </td>

                <td data-label="Date/Time">
                    <div className="m-0">
                        {TimeStampHelper.standardDateTimeFormat(
                            logs.created_at
                        )}{" "}
                    </div>
                </td>
            </tr>
        );
    });
};
const StagingBusiness = {
    stagingRedirect,
    stagingLogsRedirect,
    logsGenerate,
};

export default StagingBusiness;
