import {addNewMessageActionCreator, updateDialogMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer