import { ADD_MESSAGE } from '../actionTips';

const initialState = {
	messagesData: [
		{ id: 1, message: 'Hello', type: '1' },
		{ id: 2, message: 'Hi', type: '2' },
		{ id: 3, message: 'How are u', type: '1' },
		{ id: 4, message: 'I\'m very good, how u are?', type: '2' },
		{ id: 5, message: 'And I\'m good! Can u go for walk tonight?', type: '1' },
	],
	dialogsData: [
		{
			id: 1,
			name: 'Sardor',
			instagramUserPicSrc: null
		},
		{
			id: 2,
			name: 'Ekaterina',
			instagramUserPicSrc: null
		},
		{ id: 3, name: 'Andrew', instagramUserPicSrc: null },
		{ id: 4, name: 'Bob', instagramUserPicSrc: null },
		{ id: 5, name: 'Kristy', instagramUserPicSrc: null },
	]
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_MESSAGE: {
		return {
			...state,
			messagesData: [
				...state.messagesData,
				{
					id: state.messagesData.length + 1,
					message: action.messageText,
					type: Math.floor(Math.random() * Math.floor(2))
				}
			],
		}
	}
	default:
		return state
	}
}


export default dialogsReducer;