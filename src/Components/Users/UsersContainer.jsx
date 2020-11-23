import React from "react";
import {
	followAC,
	setCurrentPageAC,
	setUsersAC,
	setUsersTotalCountAC,
	toggleIsFetchingAC,
	unfollowAC
} from "../../redux/actionTips";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setUsersTotalCount(response.data.totalCount);
				this.props.toggleIsFetching(false);
			});
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.toggleIsFetching(false);
			});
	}

	render() {
		return <div>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalCount={this.props.totalCount}
				pageSize={this.props.pageSize}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
			/>
		</div>
	}
}

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalCount: state.usersPage.totalCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
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
		},
		toggleIsFetching: isFetching => {
			dispatch(toggleIsFetchingAC(isFetching))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)