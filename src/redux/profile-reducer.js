const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

const initialState = {
	postsData: [
		{id: 1, name: 'Ekaterina', message: 'Hi My name is Ekaterina', likeCount: 20},
		{id: 2, name: 'Sardor', message: 'Hi My name is Sardor', likeCount: 0},
		{id: 3, name: 'Ekaterina', message: 'I\'m going for a walk with my boyfriend today!', likeCount: 0},
	],
	textareaText: 'New Post',
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
					message: state.textareaText,
					likeCount: 0
				}
			],
			textareaText: ''
		}
	}
	case UPDATE_NEW_TEXT_POST: {
		return {
			...state,
			textareaText: action.newText
		}
	}
	default:
		return state;
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


export default profileReducer;