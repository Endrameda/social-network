import {
	ADD_POST,
	SET_USER_PROFILE,
	UPDATE_NEW_TEXT_POST,
	SET_STATUS,
} from "../actionTips";
import { act } from "@testing-library/react";


const initialState = {
	postsData: [
		{id: 1, name: 'Ekaterina', message: 'Hi My name is Ekaterina', likeCount: 20},
		{id: 2, name: 'Sardor', message: 'Hi My name is Sardor', likeCount: 0},
		{id: 3, name: 'Ekaterina', message: 'I\'m going for a walk with my boyfriend today!', likeCount: 0},
	],
	profile: null,
	status: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_POST: {
		return {
			...state,
			postsData: [
				...state.postsData,
				{
					id: state.postsData.length + 1,
					name: 'Oytovog',
					message: action.textBody,
					likeCount: 0
				}
			],
		}
	}
	case SET_USER_PROFILE: {
		return {
			...state,
			profile: action.profile
		}
	}
	case SET_STATUS: {
		return {
			...state,
			status: action.status
		}
	}
	default:
		return state;
	}
}


export default profileReducer;