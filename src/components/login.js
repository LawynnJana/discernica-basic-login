import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../actions';
import axios from 'axios';

const inputComp = field => {
	return (
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon" id="sizing-addon1"><i className={field.class}></i></span>
				<input className="form-control" type={field.type} placeholder={field.label} aria-describedby="sizing-addon1" {...field.input} />
			</div>		
		</div>)
}

class Login extends Component {

	componentWillMount(){
		if(this.props.loginStatus === true){
			this.props.history.push('/');
		}
	}
	onSubmit({username, password}){
		//console.log(username, password);
		this.props.loginUser(username, password, () => this.props.history.push('/'));
	}

	render() {
		const { handleSubmit } = this.props;
		console.log('Login Component');
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-10 col-md-8 col-md-offset-2">
						<div className="panel panel-info" style={{marginTop:'30px'}}>
							<div className="panel-heading">Login</div>
							<form className="form panel-body" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
								<div className="row">
									<div className="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
										<Field
											name="username"
											label="Username"
											class="fa fa-user-circle"
											type="text" 
											component={inputComp}/>
										<Field
											name="password"
											label="Password"
											type="password" 
											class="fa fa-unlock-alt"
											component={inputComp}/>
										<button className="btn btn-info" type="submit">Login</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const validate = values => {
	const errors = {};
	return {};
}

const mapStateToProps = ({ loginStatus }) => {
	return {
		loginStatus: loginStatus.status,
	}
}

//export default Login;
export default withRouter(reduxForm({
	validate,
	form:'Login',
})(connect( mapStateToProps, { loginUser })(Login)));
