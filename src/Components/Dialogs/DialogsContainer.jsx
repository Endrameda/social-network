import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addNewMessage, updateDialogMessageText } from "../../redux/actionCreators";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => {
	return {
		state: state.dialogsPage
	}
}

export default compose(
	connect(mapStateToProps, {
		addNewMessage,
		updateDialogMessageText
	}),
	withAuthRedirect
)(Dialogs);