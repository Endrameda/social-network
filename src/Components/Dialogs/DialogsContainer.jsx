import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addNewMessageActionCreator, updateDialogMessageTextActionCreator } from "../../redux/actionTips";

let mapStateToProps = state => {
	return {
		state: state.dialogsPage
	}
}

let mapDispatchToProps = dispatch => {
	return {
		addNewMessage: () => {
			dispatch(addNewMessageActionCreator())
		},
		updateDialogMessageText: (text) => {
			dispatch(updateDialogMessageTextActionCreator(text))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
