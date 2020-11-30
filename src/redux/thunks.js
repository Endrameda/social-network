import { userAPI } from "../API/api";
import {
	followSuccess,
	setUsers,
	setUsersTotalCount,
	toggleIsFetching,
	toggleIsFollowingProgress,
	unfollowSuccess
} from "./actionCreators";

export const getUsers = (currentPage, pageSize) => dispatch => {
	dispatch(toggleIsFetching(true));
	userAPI.getUsers(currentPage, pageSize).then(data => {
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setUsersTotalCount(data.totalCount));
	});
}

export const follow = (userID) => dispatch => {
	dispatch(toggleIsFollowingProgress(true, userID));
	userAPI.followUsers(userID).then(data => {
		if (data.resultCode === 0) {
			dispatch(followSuccess(userID));
		}
		dispatch(toggleIsFollowingProgress(false, userID));
	});
}

export const unfollow = (userID) => dispatch => {
	dispatch(toggleIsFollowingProgress(true, userID));
	userAPI.unFollowUsers(userID).then(data => {
		if (data.resultCode === 0) {
			dispatch(unfollowSuccess(userID));
		}
		dispatch(toggleIsFollowingProgress(false, userID));
	});
}