import React from 'react';
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from "../../redux/actionTips";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setUsersTotalCount(response.data.totalCount);
			});
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {
		return <Users
			totalCount={this.props.totalCount}
			pageSize={this.props.pageSize}
			users={this.props.users}
			unfollow={this.props.unfollow}
			follow={this.props.follow}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
		/>
	}
}

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalCount: state.usersPage.totalCount,
		currentPage: state.usersPage.currentPage
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
		},
		setCurrentPage: currentPage => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setUsersTotalCount: usersTotalCount => {
			dispatch(setUsersTotalCountAC(usersTotalCount));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)