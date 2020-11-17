import { FOLLOW, UNFOLLOW, SET_USERS } from "../actionCreators";

const initialState = {
	users: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
	case FOLLOW: {
		return {
			...state,
			users: state.users.map(user => {
				if (user.id === action.userID) {
					return {
						...user, followed: true
					}
				}
				return user
			})
		}
	}
	case UNFOLLOW: {
		return {
			...state,
			users: state.users.map(user => {
				if (user.id === action.userID) {
					return {
						...user, followed: false
					}
				}
				return user
			})
		}
	}
	case SET_USERS: {
		return {
			...state,
			users: [...state.users, ...action.users]
		}
	}
	default:
		return state
	}
}

export default usersReducer;
