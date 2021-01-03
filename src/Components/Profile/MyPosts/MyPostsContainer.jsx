import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPost } from "../../../redux/actionCreators";

const mapStateToProps = state => {
	return {
		postsData: state.profilePage.postsData
	}
}

const mapDispatchToProps =  {
		addPost
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;