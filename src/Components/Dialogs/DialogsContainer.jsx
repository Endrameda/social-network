import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addNewMessage, updateDialogMessageText } from "../../redux/actionTips";

let mapStateToProps = state => {
	return {
		state: state.dialogsPage
	}
}

let mapDispatchToProps =  {
		addNewMessage,
		updateDialogMessageText
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
