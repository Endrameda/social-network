import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { profileInfo } from "../../redux/thunks";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 12724
		}
		this.props.profileInfo(userId);
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = state => ({
	profile: state.profilePage.profile
})

let WithUrlDataRouter = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
	profileInfo
})(WithUrlDataRouter);