import React, { Component } from "react";
import Configs from "Configs";
class LoadingComponent extends Component {
    reloadFunction = () => {
        window.location.reload();
    };
    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                {data.loading || !data.success ? (
                    <section id="loading-section">
                        <img
                            id="loading-image"
                            src={`${Configs.public_url}/assets/img/Brands/bolt.gif`}
                            alt="Bionic Thunder"
                        />{" "}
                        {data.loading ? (
                            "Loading..."
                        ) : (
                            <span onClick={this.reloadFunction}>
                                Something Went Wrong,{" "}
                                <span className="text-primary cursor-pointer">
                                    Try Again
                                </span>
                            </span>
                        )}
                    </section>
                ) : (
                    ""
                )}
            </React.Fragment>
        );
    }
}

export default LoadingComponent;
