import React, { Component } from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import SiteCloneAction from "Redux/V1/Sites/Features/SiteClone/SiteCloneAction";
import Confirm from "Helpers/ConfirmationHelper";
import SiteListAction from "Redux/V1/Sites/Site/Get/SiteGetAction";
import ToolTipComponent from "Components/UI/ToolTipComponent";
import Configs from "Configs";
// import Pagination from "Components/Pagination/PaginationComponent";
import NoDataHelper from "Helpers/NoDataHelper";
import Messages from "Languages/En.lang";
import { Tooltip } from "@material-ui/core";
import ToolTipButtonComponent from "Components/UI/ToolTipButtonComponent";

class SiteClone extends Component {
    componentDidMount() {
        // const data = {
        //     search: "",
        //     page: 1,
        //     page_limit: 2,
        // };
        this.props.dis(SiteListAction.siteGet());
    }
    renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
    );
    siteList = () => {
        const sites = this.props.sites.filter((site) => {
            return site.identity !== this.props.identity;
        });
        return sites.map((site) => {
            setTimeout(() => {
                site.clone_blocked =
                    site.database.id === this.props.databaseDetail.id
                        ? false
                        : true;
                site.provider_block =
                    site.cloud_provider === "GCP" ? false : true;
            }, 200);

            return (
                <ListGroup.Item className="">
                    <Row key={site.id}>
                        <Col className="col-xl-10 pt-2" xs={6} md={8}>
                            <h6>{site.name}</h6>
                        </Col>

                        <Col className="col-xl-2" xs={6} md={3}>
                            {site.provider_block ? (
                                <ToolTipButtonComponent
                                    buttonContent={
                                        <Button
                                            className={`updatebtn clone-button bionic-btn disable-hover btn-sm mt-1 float-left ${
                                                this.props.cloneResponse.loading
                                                    ? "loading"
                                                    : ""
                                            }`}
                                            onClick={
                                                !site.provider_block
                                                    ? () =>
                                                          this.cloneCreate(
                                                              site.identity
                                                          )
                                                    : null
                                            }
                                            // disabled={site.provider_block}
                                        >
                                            {"Clone to"}
                                        </Button>
                                    }
                                    text={
                                        Messages.site_backups.clone
                                            .cloneBlockText
                                    }
                                />
                            ) : (
                                <>
                                    <Button
                                        className={`updatebtn clone-button bionic-btn btn-sm mt-1 float-left ${
                                            this.props.cloneResponse.loading
                                                ? "loading"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            this.cloneCreate(site.identity)
                                        }
                                        disabled={site.clone_blocked}
                                    >
                                        {"Clone to"}
                                    </Button>
                                    {site.clone_blocked ? (
                                        <div className="responsive-clone-tooltip">
                                            <ToolTipComponent
                                                iconClassName="mt-2 clone-info-icon"
                                                text={
                                                    Messages.site_backups.clone
                                                        .text
                                                }
                                                src={`${Configs.public_url}/assets/img/General/info.svg`}
                                            />
                                        </div>
                                    ) : null}
                                </>
                            )}
                        </Col>
                    </Row>
                </ListGroup.Item>
            );
        });
    };
    cloneCreate = (identity) => {
        const data = {
            identity: this.props.identity,
            destination_identity: identity,
        };
        Confirm(
            this.props.dis,
            SiteCloneAction.siteClone(data),
            "Site data will be overwritten with new data"
        );
    };
    render() {
        return (
            <React.Fragment>
                <div className="pt-3 pb-3">
                    <Row>
                        <Col
                            xs={6}
                            md={8}
                            className="remove-padding-margin-responsive col-xl-3 ml-2"
                        >
                            <b className="pl-4">Containers</b>
                        </Col>
                        <Col
                            lg="2 "
                            className="remove-padding-margin-responsive responsive-dis-none"
                        ></Col>
                        <Col
                            lg="4  ml-1"
                            className="remove-padding-margin-responsive responsive-dis-none"
                        ></Col>
                        <Col
                            className=" col-2 text-center col-lg-2 pl-4 remove-padding-margin-responsive col-xl-2"
                            xs={6}
                            md={2}
                        >
                            <div className="responsive-action-title">
                                {" "}
                                <b>Action</b>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="box backup-list">
                    <ListGroup>{this.siteList()}</ListGroup>
                </div>
                {NoDataHelper.available(this.siteList())
                    ? ""
                    : // <Pagination
                      //     title={"Clone"}
                      //     perPage={this.props.pagination.per_page}
                      //     totalPages={this.props.pagination.total_pages}
                      //     currentPage={this.props.pagination.current_page}
                      // />
                      ""}
            </React.Fragment>
        );
    }
}

export default SiteClone;
