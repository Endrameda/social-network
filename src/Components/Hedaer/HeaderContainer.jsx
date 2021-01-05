import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/thunks";

const HeaderContainer = (props) => {
	return <Header { ...props }/>
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export default connect(mapStateToProps, {
	logout
})(HeaderContainer);