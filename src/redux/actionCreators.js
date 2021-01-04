import {
	ADD_MESSAGE, ADD_POST,
	FOLLOW, SET_CURRENT_PAGE, SET_STATUS, SET_USER_DATA, SET_USER_DATA_ERROR, SET_USER_PROFILE,
	SET_USERS, SET_USERS_TOTAL_COUNT, TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS,
	UNFOLLOW
} from "./actionTips";


export const addNewMessage = (messageText) => {
	return {
		type: ADD_MESSAGE,
		messageText
	}
}

export const addPost = textBody => {
	return {
		type: ADD_POST,
		textBody
	}
}

export const followSuccess = (userID) => {
	return {
		type: FOLLOW,
		userID
	}
}

export const unfollowSuccess = (userID) => {
	return {
		type: UNFOLLOW,
		userID
	}
}

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users
	}
}

export const setCurrentPage = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}

export const setUsersTotalCount = (usersTotalCount) => {
	return {
		type: SET_USERS_TOTAL_COUNT,
		usersTotalCount
	}
}

export const toggleIsFetching = isFetching => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}

export const setUserProfile = profile => {
	return {
		type: SET_USER_PROFILE,
		profile
	}
}

export const setAuthUserData = (email, id, login, isAuth) => {
	return {
		type: SET_USER_DATA,
		payload: {
			email,
			id,
			login,
			isAuth
		}
	}
}

export const setAuthUserDataError = (error) => {
	return {
		type: SET_USER_DATA_ERROR,
		payload: error
	}
}

export const toggleIsFollowingProgress = (isFetching, userID) => {
	return {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching,
		userID
	}
}

export const setStatus = status => {
	return {
		type: SET_STATUS,
		status
	}
}
