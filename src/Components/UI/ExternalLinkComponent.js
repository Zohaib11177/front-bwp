import React, { Component } from "react";
import Configs from "Configs";
import ClipBoardHelper from "Helpers/ClipBoardHelper";
import { faExternalLinkAlt } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "Assets/css/sitedetail.css";
import { Link } from "react-router-dom";
import TextLimitHelper from "Helpers/TextLimitHelper";
import { ReactSVG } from "react-svg";
class ExternalLinkComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <span className="external-link-component mr-1 d-flex">
                    {this.props.link ? (
                        <a
                            href={this.props.linkText}
                            target="blank"
                            className="bionic-link bionic-bold"
                        >
                            {this.props.linkText}
                        </a>
                    ) : (
                        <span className={this.props.className}>
                            {this.props.textLimit
                                ? TextLimitHelper.limit(
                                      this.props.linkText,
                                      this.props.limit
                                  )
                                : this.props.linkText}
                        </span>
                    )}

                    <Link
                        className={"copyicon copy-icon-chunk"}
                        onClick={() =>
                            ClipBoardHelper.copy(`${this.props.linkText}`)
                        }
                    >
                        <ReactSVG
                            src={`${Configs.public_url}/assets/img/General/copy.svg`}
                            alt="copyimage"
                            className="m-0"
                        />
                    </Link>
                    <a
                        className="access-sharing-url ml-3"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={
                            this.props.externalLink
                                ? this.props.externalLink
                                : this.props.linkText
                        }
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </span>
            </React.Fragment>
        );
    }
}

export default ExternalLinkComponent;
