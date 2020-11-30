import React from "react";
import {
	setCurrentPage,
	toggleIsFollowingProgress,
} from "../../redux/actionCreators";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
	follow,
	getUsers,
	unfollow
} from "../../redux/thunks";

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return <div>
			{this.props.isFetching ? <Preloader/> : null}
			<Users
				{...this.props}
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
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default connect(mapStateToProps, {
	setCurrentPage,
	getUsers,
	follow,
	unfollow
})(UsersAPIComponent)