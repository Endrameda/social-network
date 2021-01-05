import { INITIALIZED_SUCCESS } from "../actionTips";

let initialState = {
	initialized: false,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
	case INITIALIZED_SUCCESS: {
		return {
			...state,
			initialized: true
		}
	}
	default:
		return state;
	}
}

export default appReducer