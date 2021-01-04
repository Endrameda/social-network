import { authAPI, profileAPI, userAPI } from "../API/api";
import {
	followSuccess,
	setAuthUserData, setAuthUserDataError, setStatus,
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
		if ( data.resultCode === 0 ) {
			dispatch(followSuccess(userID));
		}
		dispatch(toggleIsFollowingProgress(false, userID));
	});
}

export const unfollow = (userID) => dispatch => {
	dispatch(toggleIsFollowingProgress(true, userID));
	userAPI.unFollowUsers(userID).then(data => {
		if ( data.resultCode === 0 ) {
			dispatch(unfollowSuccess(userID));
		}
		dispatch(toggleIsFollowingProgress(false, userID));
	});
}

export const auth = (errMessage = null) => dispatch => {
	authAPI.auth().then(data => {
		if ( data.resultCode === 0 ) {
			let { email, id, login } = data.data;
			dispatch(setAuthUserData(email, id, login, true));
		} else {
			dispatch(setAuthUserDataError(errMessage))
		}
	});
}

export const login = (email, password, rememberMe) => dispatch => {
	authAPI.login(email, password, rememberMe).then(data => {
		if ( data.resultCode === 0 ) {
			dispatch(auth())
		} else {
			let message = data.messages.length > 0 ? data.messages[0] : 'Some Error'
			dispatch(auth(message))
		}
	})
}

export const logout = () => dispatch => {
	authAPI.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
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
		if ( response.data.resultCode === 0 ) {
			dispatch(setStatus(status))
		}
	})
}