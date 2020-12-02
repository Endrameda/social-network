import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { profileInfo } from "../../redux/thunks";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 12724
		}
		this.props.profileInfo(userId);
	}

	render() {
		if (!this.props.isAuth) return <Redirect to={'/login'}/>;

		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}
}

let mapStateToProps = state => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
})

let WithUrlDataRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
	profileInfo
})(WithUrlDataRouter);