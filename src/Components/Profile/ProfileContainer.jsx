import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserStatus, profileInfo, updateStatus } from "../../redux/thunks";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 12724
		}
		this.props.profileInfo(userId);
		this.props.getUserStatus(userId);
	}

	render() {
		return (
			<Profile {...this.props}
					 profile={this.props.profile}
					 status={this.props.status}
					 updateStatus={this.props.updateStatus}
			/>
		)
	}
}

let mapStateToProps = state => ({
	profile: state.profilePage.profile,
	userID: state.auth.id,
	status: state.profilePage.status
})

export default compose(connect(mapStateToProps, {
		profileInfo,
		getUserStatus,
		updateStatus
	}),
	// withAuthRedirect,
	withRouter
)(ProfileContainer);