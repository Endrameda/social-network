import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addNewMessage, updateDialogMessageText } from "../../redux/actionCreators";

let mapStateToProps = state => {
	return {
		state: state.dialogsPage,
		isAuth: state.auth.isAuth
	}
}

let mapDispatchToProps =  {
		addNewMessage,
		updateDialogMessageText
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
