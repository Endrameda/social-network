import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addNewMessage } from "../../redux/actionCreators";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => {
	return {
		state: state.dialogsPage
	}
}

export default compose(
	connect(mapStateToProps, {
		addNewMessage
	}),
	withAuthRedirect
)(Dialogs);