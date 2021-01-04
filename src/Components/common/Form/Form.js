import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";


export function Form ({ defaultValues, children, onSubmit, ...rest }) {
	const { handleSubmit, register, errors, reset } = useForm({ defaultValues, mode: 'onChange' })
	
	function submit (e) {
		onSubmit(e)
		reset()
	}
	
	return (
		<form onSubmit={ handleSubmit(submit) } { ...rest }>
			{ children.map((child) => {
				return child.props.name
					? React.createElement(child.type, {
						...{
							...child.props,
							register: register,
							key: child.props.name,
							errors: errors
						}
					})
					: child;
			}) }
		</form>
	)
}

export function Textarea ({ register, registerObject = {}, name, errors, ...rest }) {
	return <div className={ styles.fieldWrap }>
		<textarea
			className={ `${ styles.textarea } ${ errors[name] ? styles.error : '' }` }
			name={ name }
			ref={ register(registerObject) }
			{ ...rest }/>
		{ errors[name] && <p className={ styles.error }>{ errors[name].message }</p> }
	</div>
}

export function Input ({ register, registerObject = {}, name, errors, ...rest }) {
	return <div className={ styles.fieldWrap }>
		<input
			className={ `${ styles.input } ${ errors[name] ? styles.error : '' }` }
			name={ name }
			ref={ register(registerObject) }
			{ ...rest }
		/>
		{ errors[name] && <p className={ styles.error }>{ errors[name].message }</p> }
	</div>
}

export function Checkbox ({ register, registerObject = {}, name, errors, ...rest }) {
	return <div className={ styles.fieldWrap }>
		<label className={ styles.checkboxLabel }>
			<input type="checkbox" name={ name } ref={ register(registerObject) } { ...rest }/>
			<span>keep me</span>
		</label>
		{ errors[name] && <p className={ styles.error }>{ errors[name].message }</p> }
	</div>
}

export const Error = ({ errorMessage }) => {
	
	return errorMessage ?
		<div className={styles.errorBlock}>
			{ errorMessage }
		</div>
		: null
}