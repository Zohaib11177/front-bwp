import React from "react";
import { ListGroup } from "react-bootstrap";
import CapitilizeHelper from "Helpers/CapitilizeHelper";
import TimeStampHelper from "Helpers/TimeStampHelper";

const timeline = (timeline) => {
    let timelineList = timeline || [];
    return timelineList.map((timeline) => {
        return (
            <ListGroup.Item>
                {`${CapitilizeHelper.capital(
                    timeline.slug
                )} updated at ${TimeStampHelper.standardDateFormat(
                    timeline.updated_at
                )}`}
            </ListGroup.Item>
        );
    });
};
const listGenerate = (timeline) => {
    let timelineList = timeline || [];
    return timelineList.map((timeline) => {
        return (
            <tr className="timeline-table-main">
                <td data-label="Updated By">
                    <div className="m-0">
                        <b>
                            {timeline.platform === "admin"
                                ? "BionicWp"
                                : timeline.performed_by}
                        </b>{" "}
                            {` updated ${CapitilizeHelper.capital(
                                timeline.slug
                            )} `}
                    </div>
                </td>
                <td data-label="Type">
                    <div className="m-0"> {timeline.type} </div>
                </td>
                <td data-label="Old Version">
                    <div className="m-0">{timeline.current_version} </div>
                </td>
                <td data-label="Updated Version">
                    <div className="m-0">{timeline.updated_version} </div>
                </td>
                <td data-label="Date/Time">
                    <div className="m-0">
                        {TimeStampHelper.standardDateTimeFormat(
                            timeline.updated_at
                        )}{" "}
                    </div>
                </td>
            </tr>
        );
    });
};

const TimelineBusiness = {
    timeline,
    listGenerate,
};

export default TimelineBusiness;
