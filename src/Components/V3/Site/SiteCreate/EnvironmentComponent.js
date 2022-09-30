import React, { Component } from 'react';

class EnvironmentComponent extends Component {
    render() {
        const { environment, environmentSelect } = this.props;
        return (
            <React.Fragment>
                <div className="page-header">
                    Launch your new WordPress Site
                </div>
                <div className="box">
                    <section className="environment-plan row">
                        <input
                            type="radio"
                            name="site_type"
                            id="site"
                            value="site"
                            checked={environment === 1 ? true : false}
                            onClick={() => environmentSelect(1)}
                        />
                        <label className="col-md-4" htmlFor="site">
                            Install WordPress
                        </label>

                        <input
                            type="radio"
                            name="site_type"
                            id="migrate"
                            value="migrate"
                            checked={environment === 2 ? true : false}
                            onClick={() =>
                                window.open(
                                    'https://forms.monday.com/forms/embed/f7165cb08ae7bb2446aed46aaf929e81?r=use1'
                                )
                            }
                        />
                        <label className="col-md-4" htmlFor="migrate">
                            Migrate My Site
                        </label>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default EnvironmentComponent;
