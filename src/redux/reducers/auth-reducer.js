import { SET_USER_DATA, SET_USER_DATA_ERROR } from "../actionTips";

let initialState = {
	email: null,
	id: null,
	login: null,
	isAuth: false,
	error: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_USER_DATA: {
		return {
			...state,
			...action.payload,
			error: null
		}
	}
	case SET_USER_DATA_ERROR: {
		return {
			...state,
			error: action.payload
		}
	}
	default:
		return state;
	}
}

export default authReducer