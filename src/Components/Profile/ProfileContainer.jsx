import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserStatus, profileInfo, updateStatus } from "../../redux/thunks";
import { compose } from "redux";

class ProfileContainer extends React.Component {
	componentDidMount () {
		let userId = this.props.match.params.userId;
		if ( !userId ) {
			userId = this.props.authorizedUserId
			if ( !userId ) this.props.history.push('/login')
		}
		this.props.profileInfo(userId);
		this.props.getUserStatus(userId);
	}
	
	render () {
		return (
			<Profile { ...this.props }
			         profile={ this.props.profile }
			         status={ this.props.status }
			         updateStatus={ this.props.updateStatus }
			/>
		)
	}
}

let mapStateToProps = state => ({
	profile: state.profilePage.profile,
	userID: state.auth.id,
	status: state.profilePage.status,
	authorizedUserId: state.auth.id,
	isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {
		profileInfo,
		getUserStatus,
		updateStatus
	}),
	withRouter
)(ProfileContainer);