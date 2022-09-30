import React from "react";
import TimeStampHelper from "Helpers/TimeStampHelper";
const statsList = (data) => {
    data.stats = data.stats ? data.stats : [];
    return data.stats.map((stat, index) => {
        const dash = <div className="text-center">-</div>;
        stat.data_1 = stat.data_1 === null ? dash : stat.data_1;
        stat.data_2 = stat.data_2 === null ? dash : stat.data_2;
        stat.data_3 = stat.data_3 === null ? dash : stat.data_3;
        stat.data_4 = stat.data_4 === null ? dash : stat.data_4;
        stat.operating_system =
            stat.operating_system === null ? dash : stat.operating_system;
        stat.browser = stat.browser === null ? dash : stat.browser;
        return (
            <tr key={stat.id}>
                <td>{index + 1}</td>
                <td>{stat.unique_id}</td>
                <td>{stat.operating_system}</td>
                <td>{stat.browser}</td>
                <td>{stat.data_1}</td>
                <td>{stat.data_2}</td>
                <td>{stat.data_3}</td>
                <td>{stat.data_4}</td>
                <td>{TimeStampHelper.standardDateFormat(stat.created_at)}</td>
            </tr>
        );
    });
};
const Stats = {
    statsList,
};
export default Stats;
