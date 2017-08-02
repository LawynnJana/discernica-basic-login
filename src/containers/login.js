import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../actions';

const inputComp = field => {
	return (
		<div className="form-group">
			<label>{field.label}: </label><input type={field.type} placeholder={field.label}/>
		</div>)
}

class Login extends Component {
	onSubmit({username, password}){
		this.props.loginUser(username, password, () => this.props.history.push('/'));
	}

	render() {
		const { handleSubmit } = this.props;
		console.log('Login Component');
		return(
			<div className="col-md-8">
				<form className="" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field
					name="username"
					label="Username"
					type="text" 
					component={inputComp}/>
					<Field
					name="password"
					label="Password"
					type="password" 
					component={inputComp}/>
					<button className="btn btn-info" type="submit">Login</button>
				</form>
			</div>
		)
	}
}

const validate = values => {
	const errors = {};
	return {};
}

//export default Login;
export default withRouter(reduxForm({
	validate,
	form:'Login',
})(connect(null, { loginUser })(Login)));