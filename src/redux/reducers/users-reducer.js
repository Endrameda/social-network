import {
	FOLLOW,
	UNFOLLOW,
	SET_USERS,
	SET_CURRENT_PAGE,
	SET_USERS_TOTAL_COUNT,
	TOGGLE_IS_FETCHING
} from "../actionCreators";
import { act } from "@testing-library/react";

const initialState = {
	users: [],
	pageSize: 5,
	totalCount: 0,
	currentPage: 1,
	isFetching: true
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
			users: action.users
		}
	}
	case SET_CURRENT_PAGE: {
		return {
			...state,
			currentPage: action.currentPage
		}
	}
	case SET_USERS_TOTAL_COUNT: {
		return {
			...state,
			totalCount: action.usersTotalCount
		}
	}
	case TOGGLE_IS_FETCHING: {
		return {
			...state,
			isFetching: action.isFetching
		}
	}
	default:
		return state
	}
}

export default usersReducer;
