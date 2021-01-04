import React, { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { auth, logout } from "../../redux/thunks";

const HeaderContainer = (props) => {
	
	useEffect(() => {
		props.auth();
		// eslint-disable-next-line
	}, [])
	
	
	return <Header { ...props }/>
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export default connect(mapStateToProps, {
	auth,
	logout
})(HeaderContainer);