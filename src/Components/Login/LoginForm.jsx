import React from "react";
import { Checkbox, Error, Form, Input } from "../common/Form/Form";
import { login } from "../../redux/thunks";
import { connect, useSelector } from "react-redux";

const errorObject = {
	required: 'Required field',
	minLength: {
		value: 2,
		message: 'Minimum 2 characters required'
	}
}

function LoginForm ({ login }) {
	const errorMessage = useSelector(state => state.auth.error)
	const onSubmit = async data => {
		await login(data.email, data.password, data.rememberMe)
	}
	
	return (
		<Form action="" onSubmit={ onSubmit }>
			<Input
				name={ 'email' }
				type="email"
				placeholder="Email"
				registerObject={ errorObject }
			/>
			<Input
				name={ 'password' }
				type="password"
				placeholder="Password"
				registerObject={ errorObject }
			/>
			<Checkbox name={ 'rememberMe' } registerObject={ { required: 'Required field' } }/>
			<Error errorMessage={errorMessage}/>
			<Input type={ 'submit' } name="submit" className={ 'button' } value={ 'Login' }/>
		</Form>
	)
}

export default connect(null, {
	login
})(LoginForm)