import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import SearchField from "Components/Forms/Fields/SearchField";
import SearchBusiness from "Businesses/SearchBusiness";
import SiteListAction from "Redux/V1/Sites/Site/Get/SiteGetAction";
import QueryParams from "Helpers/QueryParamsHelper";
import Configs from "Configs";
class Search extends Component {
    state = {
        search: "",
    };
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });

        setTimeout(() => {
            if (SearchBusiness.lengthCheck(this.state.search)) {
                let page = 1,
                    page_limit = 10;
                if (QueryParams.queryGet() !== undefined) {
                    page = QueryParams.queryGet().page;
                    page_limit = QueryParams.queryGet().page_limit;
                }

                setTimeout(() => {
                    const data = {
                        search: this.state.search,
                        page: page,
                        page_limit: page_limit,
                    };
                    this.props.dis(SiteListAction.siteGet(data));
                }, 200);
            }
        }, 500);
    };
    searchResetFunction = () => {
        this.props.dis(SiteListAction.siteGet());
        this.setState({
            search: "",
        });
    };
    render() {
        return (
            <div className="form-group has-search searchbar-container w-100 ">
                <span className="form-control-feedback ">
                    <ReactSVG
                        src={`${Configs.public_url}/assets/img/General/magnifier.svg`}
                        alt="search-icon"
                        className="site-list-magnifier"
                    />
                </span>
                <div id="search-site-form">
                    <SearchField
                        id="search"
                        name="search"
                        onChange={this.handleChange}
                        value={this.state.search}
                        placeholder="Domain, Title"
                        onPaste={this.handleChange}
                    />
                </div>
                {this.state.search.length !== 0 ? (
                    <Button
                        variant="outline-primary filter-button"
                        onClick={this.searchResetFunction}
                    >
                        <ReactSVG src="assets/img/General/reload.svg" />
                        Reset
                    </Button>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default Search;
