import { authAPI, profileAPI, userAPI } from "../API/api";
import {
	followSuccess,
	setAuthUserData, setStatus,
	setUserProfile,
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

export const auth = () => dispatch => {
	authAPI.auth().then(data => {
		if (data.resultCode === 0) {
			let {email, id, login} = data.data;
			dispatch(setAuthUserData(email, id, login));
		}
	});
}

export const profileInfo = (userID) => dispatch => {
	profileAPI.getProfileInfo(userID).then(data => {
		dispatch(setUserProfile(data));
	});
}

export const getUserStatus = (userID) => dispatch => {
	profileAPI.getStatus(userID).then(data => {
		dispatch(setStatus(data))
	})
}

export const updateStatus = (status) => dispatch => {
	profileAPI.updateStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	})
}