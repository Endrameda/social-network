import React from 'react'
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Login = ({isAuth}) => {
	
	if (isAuth) {
		return <Redirect to={"/profile"}/>
	}
	
	return (
		<div>
			<h1>Login</h1>
			<LoginForm/>
		</div>
	)
}

let mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, null)(Login)