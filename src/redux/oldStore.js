import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";

let oldStore = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, name: 'Ekaterina', message: 'Hi My name is Ekaterina', likeCount: 20},
                {id: 2, name: 'Sardor', message: 'Hi My name is Sardor', likeCount: 0},
                {id: 3, name: 'Ekaterina', message: 'I\'m going for a walk with my boyfriend today!', likeCount: 0},
            ],
            textareaText: 'New Post',
        },
        dialogsPage: {
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
        },
        aside: {
            asideFriends: [
                {id: 1, nickname: 'Daniel'},
                {id: 2, nickname: 'Eleanora'},
                {id: 3, nickname: 'Angela'}
            ]
        }
    },
    _callSubscriber(state) {
        console.log('State changed')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer  // pattern observer
    },

    dispatch(action) {  // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
};




export default oldStore;