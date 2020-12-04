import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addNewMessage, updateDialogMessageText } from "../../redux/actionCreators";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = state => {
	return {
		state: state.dialogsPage
	}
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

export default connect(mapStateToProps, {
	addNewMessage,
	updateDialogMessageText
})(AuthRedirectComponent);
