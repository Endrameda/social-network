import {
	ADD_MESSAGE,
	ADD_POST,
	FOLLOW, SET_CURRENT_PAGE, SET_USER_PROFILE,
	SET_USERS, SET_USERS_TOTAL_COUNT, TOGGLE_IS_FETCHING,
	UNFOLLOW,
	UPDATE_MESSAGE_TEXT,
	UPDATE_NEW_TEXT_POST
} from "./actionCreators";

export const updateDialogMessageText = (text) => {
	return {
		type: UPDATE_MESSAGE_TEXT,
		newText: text
	}
}

export const addNewMessage = () => {
	return {
		type: ADD_MESSAGE
	}
}

export const addPost = () => {
	return {
		type: ADD_POST
	}
}

export const updateChangeTextarea = (text) => {
	return {
		type: UPDATE_NEW_TEXT_POST,
		newText: text
	}
}

export const follow = (userID) => {
	return {
		type: FOLLOW,
		userID
	}
}

export const unfollow = (userID) => {
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