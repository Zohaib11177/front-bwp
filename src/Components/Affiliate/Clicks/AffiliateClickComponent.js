import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import AffiliateClickAction from "Redux/V1/Affiliate/AffiliateClick/AffiliateClickAction";
import AffiliateBusiness from "Businesses/AffiliateBusiness";
import NoData from "Helpers/NoDataHelper";
import Pagination from "Components/Pagination/PaginationComponent";
import "Assets/css/affiliate.css";
import NoDataHelper from "Helpers/NoDataHelper";
import TableComponent from "Components/UI/TableComponent";
import "Assets/css/Responsive/affiliate.css";

class AffiliateClickComponent extends Component {
    componentDidMount() {
        this.props.dis(
            AffiliateClickAction.affiliateClick(this.props.affiliateId)
        );
    }

    render() {
        const { click } = this.props;
        const tableHeadings = [
            "#",
            "Operating System",
            "Browser",
            "Data 1",
            "Data 2",
            "Data 3",
            "Data 4",
            "Date",
        ];
        return (
            <Row className="mt-5">
                <Col md={12}>
                    <h4>
                        <b>Clicks</b>
                    </h4>
                    <TableComponent
                        classNameTable="affiliate-table-main"
                        thead={tableHeadings}
                        tbody={
                            AffiliateBusiness.generate(click.clicks)
                                ? AffiliateBusiness.generate(click.clicks)
                                : NoDataHelper.available(
                                      click.cliks,
                                      click.loading
                                  )
                        }
                    />
                    {/* <Table striped bordered hover className="bg-white">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Operating System</th>
                                <th>Browser</th>
                                <th>Data 1</th>
                                <th>Data 2</th>
                                <th>Data 3</th>
                                <th>Data 4</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {AffiliateBusiness.generate(click.clicks)}
                        </tbody>
                    </Table> */}

                    {NoData.available(click.clicks, click.loading)}
                    {NoData.available(click.clicks, click.loading) ? (
                        ""
                    ) : (
                        <Pagination
                            title={"Affiliate Clicks"}
                            perPage={click.pagination.per_page}
                            totalPages={click.pagination.total_pages}
                            currentPage={click.pagination.current_page}
                        />
                    )}
                </Col>
            </Row>
        );
    }
}

export default AffiliateClickComponent;
