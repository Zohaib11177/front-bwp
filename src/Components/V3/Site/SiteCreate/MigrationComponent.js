import React, { Component } from "react";
import MigrationForm from "Components/Forms/MigrationForm";

class MigrationComponent extends Component {
    render() {
        const { migration, dataGet, error, addons } = this.props;
        return (
            <React.Fragment>
                <div>
                    <div className="page-header">Migration Information</div>
                    <div
                        className="box migration-form form-container "
                        id="registration-form"
                    >
                        <div className="migration-text migrate-text">
                            If you would like our experts to migrate this site
                            for you please fill out all of the following
                            information:
                        </div>

                        <MigrationForm
                            migration={migration}
                            dataGet={dataGet}
                            error={error}
                            addons={addons}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MigrationComponent;
