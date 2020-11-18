import {
	ADD_MESSAGE,
	ADD_POST,
	FOLLOW,
	SET_USERS,
	UNFOLLOW,
	UPDATE_MESSAGE_TEXT,
	UPDATE_NEW_TEXT_POST
} from "./actionCreators";

export const updateDialogMessageTextActionCreator = (text) => {
	return {
		type: UPDATE_MESSAGE_TEXT,
		newText: text
	}
}

export const addNewMessageActionCreator = () => {
	return {
		type: ADD_MESSAGE
	}
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}

export const updateNewTextPostActionCreator = (text) => {
	return {
		type: UPDATE_NEW_TEXT_POST,
		newText: text
	}
}

export const followAC = (userID) => {
	return {
		type: FOLLOW,
		userID
	}
}

export const unfollowAC = (userID) => {
	return {
		type: UNFOLLOW,
		userID
	}
}

export const setUsersAC = (users) => {
	return {
		type: SET_USERS,
		users
	}
}
