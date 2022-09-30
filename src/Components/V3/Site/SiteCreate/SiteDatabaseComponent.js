import React, { Component } from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Capitilize from "Helpers/CapitilizeHelper";
import SiteDatabaseAction from "Redux/V1/Sites/Site/SiteDatabase/SiteDatabaseAction";
import SelectField from "Components/Forms/Fields/SelectField";
import { connect } from "react-redux";
import { faInfoCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* Tooltip with link function*/
const renderTooltip = (props) => (
    <Tooltip className="button-tooltip database-tooltip" {...props}>
        <a
            href="https://docs.bionicwp.com/knowledgebase/database-selection-mariadb-10-1-45-mysql-8-0-22/"
            target="_"
        >
            <div className="tooltip1">
                <p>
                    Can't decide what to select{" "}
                    <span
                        style={{
                            textDecoration: "underline",
                        }}
                    >
                        {" "}
                        click here{" "}
                    </span>
                </p>
            </div>
        </a>
    </Tooltip>
);
class SiteDatabaseComponent extends Component {
    state = {
        form: {
            database: null,
        },
        state_run: true,
    };

    /* Changing state values with thi function*/
    handleChange = (event) => {
        const target = event.target;
        const { form } = this.state;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
        setTimeout(() => {
            this.props.dataGet(name, value);
        }, 500);
    };

    /* Calling site database api*/
    componentDidMount = () => {
        this.props.dispatch(SiteDatabaseAction.siteDatabase());
    };

    /* Generating database list function*/
    databaseListFunction = () => {
        const { form } = this.state;
        return this.props.database.site_db.map((database) => {
            /* Default data base selection*/
            if (database.default === true && this.state.state_run) {
                this.props.dataGet("database", database.id);
                form.database = database.id;
                this.setState({
                    form,
                    state_run: false,
                });
            }
            /* Default data base selection*/
            return (
                <option value={database.id}>
                    {Capitilize.capital(database.db_name)}
                </option>
            );
        });
    };

    render() {
        const { form } = this.state;
        const { schema, error } = this.props;
        return (
            <React.Fragment>
                <OverlayTrigger
                    placement="bottom"
                    delay={{
                        show: 10,
                        hide: 900,
                    }}
                    overlay={renderTooltip}
                >
                    <button
                        type="button"
                        class="btn btn-link db-info z-index-9"
                    >
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            className="wallet-icon db-info-icon"
                        />{" "}
                    </button>
                </OverlayTrigger>
                <Row>
                    {" "}
                    <Col lg="12">
                        <SelectField
                            name="database"
                            defaultOption={"Select Database"}
                            value={form.database}
                            options={this.databaseListFunction()}
                            onChange={this.handleChange}
                            schema={schema}
                            error={error}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        database: state.site.site.siteDatabase,
    };
}
export default connect(mapStateToProps)(SiteDatabaseComponent);
