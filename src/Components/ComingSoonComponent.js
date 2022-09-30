import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreator from "Redux/Actions/UserAction";

class ComingSoon extends Component {
    componentDidMount() {
        // store.dispatch({ type: "INCREMENT" });
    }
    commentMessage = () => {
    };
    render() {
        return (
            <div>
                <h1 onClick={this.props.UserAction.getUsers}>
                    Site is in development
                </h1>
                <button onClick={this.commentMessage}>Get State</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserAction: bindActionCreators(UserActionCreator, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);
