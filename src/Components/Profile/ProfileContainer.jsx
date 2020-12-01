import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { profileInfo } from "../../redux/thunks";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		this.props.profileInfo(userId);
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}
}

let mapStateToProps = state => ({
	profile: state.profilePage.profile
})

let WithUrlDataRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
	profileInfo
})(WithUrlDataRouter);