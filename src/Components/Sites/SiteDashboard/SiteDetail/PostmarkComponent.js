import React, { Component } from 'react';
import TemplateFull from 'Templates/TemplateFull';
import ClipBoardHelper from 'Helpers/ClipBoardHelper';
import 'Assets/css/sitedetail.css';
import Configs from 'Configs';
import 'Assets/css/Responsive/SiteDetailDashboard.css';
// import TemplateFull from "Templates/TemplateFull";

import { ReactSVG } from 'react-svg';
class PostmarkComponent extends Component {
    render() {
        // const {  } = this.props.siteDetail;
        console.log(this.props.postmark);
        const { postmark } = this.props;
        return (
            <React.Fragment>
                <div className="sftp-responsive-main" id="sftp">
                    <div className="page-header">Postmark Details</div>
                    <div className={`box `}>
                        <TemplateFull>
                            <div className="responsive-sftp-fields">
                                <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        DKIM Host
                                    </div>
                                    <div className="sitedetais-desc">
                                        {postmark ? (
                                            <React.Fragment>
                                                <p className="float-left mr-3">
                                                    {postmark.dkim_hostname}
                                                </p>

                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            postmark.dkim_hostname
                                                        )
                                                    }>
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                        alt="copyimage"
                                                    />
                                                </button>
                                            </React.Fragment>
                                        ) : (
                                            'N/A'
                                        )}
                                    </div>
                                </div>
                                <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        DKIM Type
                                    </div>
                                    <div className="sitedetais-desc d-flex">
                                        {postmark ? (
                                            <React.Fragment>
                                                <p
                                                    className="float-left mr-3"
                                                    flexWrap="wrap"
                                                    wordWrap="break-word">
                                                    {postmark.dkim_type}
                                                </p>
                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            postmark.dkim_type
                                                        )
                                                    }>
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                        alt="copyimage"
                                                    />
                                                </button>
                                            </React.Fragment>
                                        ) : (
                                            'N/A'
                                        )}
                                    </div>
                                </div>
                                <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        DKIM Value
                                    </div>
                                    <div className="sitedetais-desc">
                                        {postmark ? (
                                            <React.Fragment>
                                                <p value={postmark.dkim_value}>
                                                    {postmark.dkim_value}
                                                </p>
                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            postmark.dkim_value
                                                        )
                                                    }>
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                        alt="copyimage"
                                                    />
                                                </button>
                                            </React.Fragment>
                                        ) : (
                                            'N/A'
                                        )}
                                    </div>
                                </div>
                                <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        Return PATH HOSTNAME
                                    </div>
                                    <div className="sitedetais-desc d-flex">
                                        {postmark ? (
                                            <React.Fragment>
                                                <p
                                                    className="float-left mr-3"
                                                    flexWrap="wrap"
                                                    wordWrap="break-word">
                                                    {
                                                        postmark.returnpath_hostname
                                                    }
                                                </p>
                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            postmark.returnpath_hostname
                                                        )
                                                    }>
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                        alt="copyimage"
                                                    />
                                                </button>
                                            </React.Fragment>
                                        ) : (
                                            'N/A'
                                        )}
                                    </div>
                                </div>
                                <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        Return PATH TYPE
                                    </div>
                                    <div className="sitedetais-desc d-flex">
                                        {postmark ? (
                                            <React.Fragment>
                                                <p
                                                    className="float-left mr-3"
                                                    flexWrap="wrap"
                                                    wordWrap="break-word">
                                                    {postmark.returnpath_type}
                                                </p>
                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            postmark.returnpath_type
                                                        )
                                                    }>
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                        alt="copyimage"
                                                    />
                                                </button>
                                            </React.Fragment>
                                        ) : (
                                            'N/A'
                                        )}
                                    </div>
                                </div>
                                <div className="sitedetais">
                                    <div className="sitedetais-title">
                                        Return PATH Value
                                    </div>
                                    <div className="sitedetais-desc d-flex">
                                        {postmark ? (
                                            <React.Fragment>
                                                <p
                                                    className="float-left mr-3"
                                                    flexWrap="wrap"
                                                    wordWrap="break-word">
                                                    {postmark.returnpath_value}
                                                </p>
                                                <button
                                                    className="copyicon"
                                                    onClick={() =>
                                                        ClipBoardHelper.copy(
                                                            postmark.returnpath_value
                                                        )
                                                    }>
                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                                        alt="copyimage"
                                                    />
                                                </button>
                                            </React.Fragment>
                                        ) : (
                                            'N/A'
                                        )}
                                    </div>
                                </div>
                            </div>
                        </TemplateFull>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PostmarkComponent;
