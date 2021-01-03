import styles from './ProfileInfo.module.scss'
import React from "react";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status);
	}

	onChangeStatus = e => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		const textStatus = <div>
			<span
				onDoubleClick={this.activateEditMode}>
				{this.props.status || 'Введите статус'}
			</span>
		</div>;

		const inputStatus = <div>
			<input
				onChange={this.onChangeStatus}
				autoFocus={true}
				onBlur={this.deactivateEditMode}
				value={this.state.status}/>
		</div>;

		return (
			<div className={styles.about}>
				{!this.state.editMode
					? textStatus
					: inputStatus}
			</div>
		)
	}
}

export default ProfileStatus