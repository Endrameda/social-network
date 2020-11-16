const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
	messagesData: [
		{id: 1, message: 'Hello', type: '1'},
		{id: 2, message: 'Hi', type: '2'},
		{id: 3, message: 'How are u', type: '1'},
		{id: 4, message: 'I\'m very good, how u are?', type: '2'},
		{id: 5, message: 'And I\'m good! Can u go for walk tonight?', type: '1'},
	],
	dialogsData: [
		{
			id: 1,
			name: 'Sardor',
			instagramUserPicSrc: 'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-19/s150x150/35574612_261445484606305_4883036490206019584_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_ohc=pop7AeqdNvkAX9S0cuM&oh=ec1caf723ab63f6b5399e6230f707689&oe=5FAE3658'
		},
		{
			id: 2,
			name: 'Ekaterina',
			instagramUserPicSrc: 'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-19/s150x150/116616130_1465340073675779_6113376295428671452_n.jpg?_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_ohc=fKUCXp-_FuYAX_2jZTr&oh=bde063297e115832517f8c8fc216fda1&oe=5FADAE5C'
		},
		{id: 3, name: 'Andrew', instagramUserPicSrc: null},
		{id: 4, name: 'Bob', instagramUserPicSrc: null},
		{id: 5, name: 'Kristy', instagramUserPicSrc: null},
	],
	textareaValue: 'New message'
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
	case UPDATE_MESSAGE_TEXT: {
		return {
			...state,
			textareaValue: action.newText
		}
	}
	case ADD_MESSAGE: {
		return {
			...state,
			messagesData: [
				...state.messagesData,
				{
					id: state.messagesData.length + 1,
					message: state.textareaValue,
					type: Math.floor(Math.random() * Math.floor(2))
				}
			],
			textareaValue: ''
		}
	}
	default:
		return state
	}
}

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

export default dialogsReducer;