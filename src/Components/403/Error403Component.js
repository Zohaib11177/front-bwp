import React, { Component } from "react";
import "Assets/css/404.css";
import Footer from "Components/Footer";

class Error403Component extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="error-404-page">
                    <div className="error-404 d-flex align-items-center justify-content-center">
                        <div className="error-desc">
                            <h2 className="error-code m-b-10 m-t-20">403</h2>
                            <h2 className="font-bold">
                                Oops 403! Unauthorized access.
                            </h2>
                            We appologies for the inconvenience, but you are not
                            authorized to visit this page. <br />
                            If you believe this is an error, please contact your
                            account manage.
                            <div>
                                <a
                                    href="/dashboard"
                                    className="btn btn-primary bionic-btn"
                                >
                                    Go back to Homepage
                                </a>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}
export default Error403Component;
