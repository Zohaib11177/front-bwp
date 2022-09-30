import React, { Component } from "react";
import Main from "Components/MainComponent";
import { connect } from "react-redux";
import { setFavIcon, setTitle, setThemeColors , setLoaderImage } from "Businesses/PortalSettingsBusiness"

class App extends Component {

	componentDidMount() {
		const { portal_settings } = this.props.portalSettings
		setFavIcon(portal_settings)
		setTitle(portal_settings)
		setThemeColors(portal_settings)
		setLoaderImage(portal_settings)
	}

	componentDidUpdate() {
		const { portal_settings } = this.props.portalSettings
		setFavIcon(portal_settings)
		setTitle(portal_settings)
		setThemeColors(portal_settings)
		setLoaderImage(portal_settings)
	}

	render() {
		return <Main />
	}
}

function mapStateToProps(state) {
	return {
		portalSettings: state.portalSettingsV6.list
	};
}

export default connect(mapStateToProps)(App);
