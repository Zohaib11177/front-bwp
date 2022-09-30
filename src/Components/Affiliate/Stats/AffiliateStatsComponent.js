import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import AffiliateStatsAction from "Redux/V1/Affiliate/AffiliateStats/AffiliateStatsAction";
import AffiliateBusiness from "Businesses/AffiliateBusiness";
import NoData from "Helpers/NoDataHelper";
import NoDataHelper from "Helpers/NoDataHelper";
import "Assets/css/affiliate.css";
import { connect } from "react-redux";
import TableComponent from "Components/UI/TableComponent";
import "Assets/css/Responsive/affiliate.css";

class AffiliateStats extends Component {
    componentDidMount() {
        this.props.dis(AffiliateStatsAction.affiliateStats());
    }

    render() {
        const { stats } = this.props.stats;
        const { affiliateStatsLoading } = this.props.affiliateStatsLoading;
        const tableHeadings = [
            "#",
            "Unique Id",
            "Operating System",
            "Browser",
            "Data 1",
            "Data 2",
            "Data 3",
            "Data 4",
            "Date",
        ];
        return (
            <Row className="mt-5 affiliate-stats-main">
                <Col md={12}>
                    <h4>
                        <b>Signups</b>
                    </h4>

                    <TableComponent
                        classNameTable="affiliate-table-main"
                        thead={tableHeadings}
                        tbody={
                            AffiliateBusiness.generate(stats)
                                ? AffiliateBusiness.generate(stats)
                                : NoDataHelper.available(
                                      stats,
                                      affiliateStatsLoading
                                  )
                        }
                    />
                    {/* <Table striped bordered hover className="bg-white ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Unique Id</th>
                                <th>Operating System</th>
                                <th>Browser</th>
                                <th>Data 1</th>
                                <th>Data 2</th>
                                <th>Data 3</th>
                                <th>Data 4</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>{AffiliateBusiness.generate(stats)}</tbody>
                    </Table> */}
                    <div className="text-center w-100 no-data-stats">
                        <h5>
                            {NoData.available(stats, affiliateStatsLoading)}
                        </h5>
                    </div>
                </Col>
            </Row>
        );
    }
}
function mapStateToProps(state) {
    return {
        statsList: state.statsList,
    };
}

export default connect(mapStateToProps)(AffiliateStats);
