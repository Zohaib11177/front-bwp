import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import NitroDetailAction from "Redux/V1/Sites/Addons/Nitro/First/NitroFirstAction";
import NitroEnableAction from "Redux/V1/Sites/Addons/Nitro/NitroEnable/NitroEnableAction";
import NitroDisableAction from "Redux/V1/Sites/Addons/Nitro/NitroDisable/NitroDisableAction";
import Confirm from "Helpers/ConfirmationHelper";
import "Assets/css/Responsive/SiteDetailAddons.css";
import Messages from "Languages/En.lang";

class SiteNitroComponent extends Component {
    componentDidMount() {
        this.props.dispatch(NitroDetailAction.nitroFirst(this.props.identity));
    }
    nitroEnable = () => {
        try {
            if (Object.keys(this.props.nitroDetail.nitro_detail).length !== 0) {
                this.props.dispatch(
                    NitroEnableAction.nitroEnable(this.props.identity)
                );
            } else {
                Confirm(
                    this.props.dispatch,
                    NitroEnableAction.nitroEnable(this.props.identity),
                    `Please note that Bionic speed is a paid add on ($9 per month) and would be billed monthly. <br><div class="note-text">Note: If you are using free site, you will not be charged</div>`
                );
            }
        } catch {
            console.log("nitro length error");
        }
    };
    nitroDisable = () => {
        this.props.dispatch(
            NitroDisableAction.nitroDisable(this.props.identity)
        );
    };
    render() {
        let nitroStatus;
        try {
            nitroStatus = this.props.nitroDetail.nitro_detail.status;
        } catch {
            console.log("Nitro Status Wrong");
        }

        const { cdnDetail, cdnEnable, nitroDisable, nitroEnable } = this.props;

        const cdnStatus = cdnDetail.cdn_details.status;

        const cdnBlock =
            cdnStatus === "pending" || cdnEnable.loading ? true : false;

        const nitroBlock =
            nitroStatus === "pending" ||
            nitroDisable.loading ||
            nitroEnable.loading
                ? true
                : false;

        return (
            <React.Fragment>
                <div className="box">
                    <Row>
                        <Col lg="9">
                            <div className="page-header">
                                Bionic Speed powered by NitroPack
                            </div>
                            <div className="">
                                <p>{Messages.site_addons.bionic_speed.text}</p>
                            </div>
                        </Col>
                        <Col
                            lg="3"
                            className="text-right align-self-center align-self-responsive"
                        >
                            {nitroStatus === "active" ? (
                                <Button
                                    onClick={this.nitroDisable}
                                    className={`updatebtn bionic-btn mt-4  ${
                                        nitroDisable.loading ? "loading" : ""
                                    }`}
                                    disabled={nitroBlock || cdnBlock}
                                >
                                    Disable
                                </Button>
                            ) : (
                                <Button
                                    onClick={this.nitroEnable}
                                    className={`updatebtn bionic-btn mt-4 ${
                                        nitroEnable.loading ? "loading" : ""
                                    }`}
                                    disabled={nitroBlock || cdnBlock}
                                >
                                    Enable
                                </Button>
                            )}
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default SiteNitroComponent;
