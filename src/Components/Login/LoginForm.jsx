import React from "react";
import { Checkbox, Form, Input } from "../common/Form/Form";

const errorObject = {
	required: 'Required field',
	minLength: {
		value: 2,
		message: 'Minimum 2 characters required'
	}
}

export default function LoginForm () {
	
	const onSubmit = data => console.log(data)
	
	return (
		<Form action="" onSubmit={ onSubmit }>
			<Input
				name={ 'name' }
				type="text"
				placeholder="Name"
				registerObject={ errorObject }
			/>
			<Input
				name={ 'password' }
				type="text"
				placeholder="Password"
				registerObject={ errorObject }
			/>
			<Checkbox name={ 'checkbox' } registerObject={ { required: 'Required field' } }/>
			<Input type={ 'submit' } name="submit" className={ 'button' } value={ 'Login' }/>
		</Form>
	)
}