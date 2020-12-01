import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { auth } from "../../redux/thunks";

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.auth();
	}

	render() {
		return <Header {...this.props}/>
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export default connect(mapStateToProps, {
	auth
})(HeaderContainer);