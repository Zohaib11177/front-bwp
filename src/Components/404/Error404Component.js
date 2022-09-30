import React, { Component } from "react";
import "Assets/css/404.css";
import Footer from "Components/Footer";

class Error404Component extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="error-404-page">
                    <div className="error-404 d-flex align-items-center justify-content-center">
                        <div className="error-desc">
                            <h2 className="error-code m-b-10 m-t-20">404</h2>
                            <h2 className="font-bold">
                                Oops 404! That page can’t be found..
                            </h2>
                            Sorry, but the page you are looking for was either
                            not found or does not exist. <br />
                            Try refreshing the page or click the button below to
                            go back to the Homepage.
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
export default Error404Component;
