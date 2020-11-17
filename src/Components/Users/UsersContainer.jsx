import React from 'react';
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../redux/actionTips";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = dispatch => {
	return {
		follow: userID => {
			dispatch(followAC(userID));
		},
		unfollow: userID => {
			dispatch(unfollowAC(userID));
		},
		setUsers: users => {
			dispatch(setUsersAC(users))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)