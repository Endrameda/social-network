import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewTextPostActionCreator } from "../../../redux/actionTips";

const mapStateToProps = state => {
	return {
		newPostText: state.profilePage.textareaText,
		postsData: state.profilePage.postsData
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateChangeTextarea: (text) => {
			let action = updateNewTextPostActionCreator(text)
			dispatch(action)
		},
		addPost: () => dispatch(addPostActionCreator())
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;