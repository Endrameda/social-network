import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/actionCreators";
import { authAPI } from "../../API/api";

class HeaderContainer extends React.Component {
	componentDidMount() {
		authAPI.auth().then(data => {
			if (data.resultCode === 0) {
				let {email, id, login} = data.data;
				this.props.setAuthUserData(email, id, login);
			}
		});
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
	setAuthUserData
})(HeaderContainer);