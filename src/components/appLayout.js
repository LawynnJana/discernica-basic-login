import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { isLoggedIn } from '../actions';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from '../containers/navbar';

const RenderLayout = props => {
	return(
		<div>
			<NavBar/>
			<div className="container">
			<Switch>

			</Switch>
			</div>
		</div>
	);
}

class AppLayout extends Component {
	componentWillMount() {
		if(!this.props.loginSatus){
			axios.get('http://dev.discernica.com:65525/isloggedin')
      .then((res) => {
        console.log('Response:', res);
        //if(res.code === 200){
        	//this.props.isLoggedIn(true); //loginStatus = true;
        	//this.props.fetchUser();		
        //}
        //else if(res.code ===400){
        	//I get username and password, use that to then login
        	//console.debug('Redirect to login...');
        	//this.props.history.push('/login');
        //}
        //
        //
      }).catch((err) => {
        console.log('Error res:', err);
        
        // ---- TEMP ----
        alert('SHOULD: Redirect to login...');
        this.props.isLoggedIn(true); 
        // ---- TEMP ----

        //this.props.isLoggedIn(false);
        //this.props.history.push('/login');
      })
		}
	}

	render() {
		let toRender = this.props.loginStatus ? <RenderLayout {...this.props} /> : <div>Loading...</div>;
		return toRender;
	}
}

const mapStateToProps = ({ loginStatus }) => {
	return {
		loginStatus,
	}
}

export default withRouter(connect(mapStateToProps, {isLoggedIn})(AppLayout));