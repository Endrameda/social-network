import React from "react";
import {
	setCurrentPage
} from "../../redux/actionCreators";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
	follow,
	requestUsers,
	unfollow
} from "../../redux/thunks";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalCount,
	getUsers
} from "./users-selector";

class UsersAPIComponent extends React.Component {
	componentDidMount () {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	
	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(pageNumber, this.props.pageSize)
	}
	
	render () {
		return <div>
			{ this.props.isFetching ? <Preloader/> : null }
			<Users
				{ ...this.props }
				onPageChanged={ this.onPageChanged }
			/>
		</div>
	}
}

/*const mapStateToProps = state => {
 return {
 users: state.usersPage.users,
 pageSize: state.usersPage.pageSize,
 totalCount: state.usersPage.totalCount,
 currentPage: state.usersPage.currentPage,
 isFetching: state.usersPage.isFetching,
 followingInProgress: state.usersPage.followingInProgress
 }
 }*/

const mapStateToProps = state => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalCount: getTotalCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default compose(
	connect(mapStateToProps, {
		setCurrentPage,
		getUsers: requestUsers,
		follow,
		unfollow
	}),
	withAuthRedirect
)(UsersAPIComponent)