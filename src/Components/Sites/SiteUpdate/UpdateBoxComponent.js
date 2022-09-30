import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WordpressUpdateAction from 'Redux/V1/Sites/Wordpress/WordpressUpdate/WordpressUpdateAction';
import WordpressLockAction from 'Redux/V1/Sites/Wordpress/WordpressLock/WordpressLockAction';
import WordpressRefreshAction from 'Redux/V1/Sites/Wordpress/WordpressRefresh/WordpressRefreshAction';
import WordpressListAction from 'Redux/V1/Sites/Wordpress/Get/WordpressGetAction';
import SiteUpdateBusiness from 'Businesses/SiteDetails/SiteUpdateBusiness';
import Capitilize from 'Helpers/CapitilizeHelper';
import 'Assets/css/Responsive/SiteDetailUpdate.css';
class UpdateBoxComponent extends Component {
    componentDidMount() {
        if (this.props.apiCallCondition) {
            this.props.dis(
                WordpressListAction.wordpressGet(this.props.identity)
            );
        }
    }
    updateFunction = (type, slug) => {
        const updateDetails = {
            identity: this.props.identity,
            type,
            slug,
            host: this.props.host,
        };
        this.props.dis(WordpressUpdateAction.wordpressUpdate(updateDetails));
    };
    lockFunction = (slug) => {
        const lockDetails = {
            identity: this.props.identity,
            slug,
        };

        this.props.dis(WordpressLockAction.wordpressLock(lockDetails));
    };
    wordpressRefreshFunction = () => {
        this.props.dis(
            WordpressRefreshAction.wordpressRefresh(this.props.identity)
        );
    };
    render() {
        const { list, title, mainSlug, updateSlug, lockLoading } = this.props;
        const updateList = SiteUpdateBusiness.generate(
            list,
            title,
            mainSlug,
            updateSlug,
            this.lockFunction,
            this.updateFunction,
            lockLoading
        );
        return (
            <React.Fragment>
                <Row>
                    <Col lg="8 col-8">
                        <div className="page-header refresh-icon-update ">
                            WordPress{' '}
                            {title === 'wp' ? '' : Capitilize.capital(title)}
                            <Link
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Refresh"
                                onClick={this.wordpressRefreshFunction}>
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    stroke="var(--main-color)"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                </svg>{' '}
                            </Link>
                        </div>
                    </Col>
                    <Col lg="4" className="text-right pt-4 col-4">
                        {title === 'wp' ? (
                            ''
                        ) : (
                            <Link
                                className="update-all"
                                onClick={() =>
                                    this.updateFunction(title, mainSlug)
                                }>
                                Update All
                            </Link>
                        )}
                    </Col>
                </Row>
                <div className="box">
                    <Row className="pr-4">
                        <Col lg="3" sm="4" xs="4">
                            <div className="update-title">
                                {' '}
                                {title === 'wp'
                                    ? 'Wordpress'
                                    : // eslint-disable-next-line
                                      title + ' ' + 'Name'}
                            </div>
                        </Col>
                        <Col
                            lg="3"
                            sm="4"
                            xs="4"
                            className="ml-1 version-title">
                            <div className="update-title ">Version</div>
                        </Col>
                        <Col
                            lg="3"
                            sm="4"
                            xs="4"
                            className="pl-2  latest-version-title">
                            <div className="update-title">Latest Version</div>
                        </Col>
                        <Col lg="2" className="text-right"></Col>
                    </Row>
                    {updateList}
                </div>
            </React.Fragment>
        );
    }
}

export default UpdateBoxComponent;
