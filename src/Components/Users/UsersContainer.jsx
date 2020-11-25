import React from "react";
import {
	follow,
	setCurrentPage,
	setUsers,
	setUsersTotalCount,
	toggleIsFetching,
	unfollow
} from "../../redux/actionCreators";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../API/api";

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.setUsers(data.items);
			this.props.setUsersTotalCount(data.totalCount);
			this.props.toggleIsFetching(false);
		});
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true);
		userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
				this.props.setUsers(data.items);
				this.props.toggleIsFetching(false);
			});
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
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setUsersTotalCount,
	toggleIsFetching
})(UsersAPIComponent)