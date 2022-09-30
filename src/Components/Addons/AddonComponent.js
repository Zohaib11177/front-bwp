import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import TemplateSideLeft from "Templates/TemplateSidebarLeft";
import AddonSupportComponent from "./AddonSupportComponent";
import AddonCommentComponent from "./AddonCommentComponent";
class AddonComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm={12}>
                        <div className="page-header">Addons</div>
                    </Col>
                </Row>
                <div className="box overlay-grey">
                    <div className="addons">
                        <TemplateSideLeft>
                            <AddonSupportComponent
                                title="BionicSpeed"
                                price="$9/mo per site"
                            />
                            <AddonCommentComponent
                                message="Why is my site loading so fast!"
                                author="Sean Dennin"
                            />
                        </TemplateSideLeft>

                        <TemplateSideLeft>
                            <AddonSupportComponent
                                title="Truly Managed"
                                price="$75/mo"
                            />
                            <AddonCommentComponent
                                message="Game Changer"
                                author="Dean"
                            />
                        </TemplateSideLeft>

                        <TemplateSideLeft>
                            <AddonSupportComponent
                                title="Advanced Security"
                                price="$2/mo"
                            />
                            <AddonCommentComponent
                                message="They found malware on 7 of my sites that had Sucuri on them"
                                author="Brian"
                            />
                        </TemplateSideLeft>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default AddonComponent;
