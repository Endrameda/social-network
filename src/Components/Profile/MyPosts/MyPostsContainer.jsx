import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPost, updateChangeTextarea } from "../../../redux/actionTips";

const mapStateToProps = state => {
	return {
		newPostText: state.profilePage.textareaText,
		postsData: state.profilePage.postsData
	}
}

const mapDispatchToProps =  {
		updateChangeTextarea,
		addPost
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;