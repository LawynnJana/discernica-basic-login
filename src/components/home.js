import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { isLoggedIn } from '../actions';
import { withRouter } from 'react-router-dom';

class Home extends Component {
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
        console.debug('Redirect to login...');
        this.props.isLoggedIn(false);
        this.props.history.push('/login');
      })
		}
	}

	render() {
		let toRender = this.props.loginStatus ? <div>Home page</div> : <div>Loading...</div>;
		return toRender;
	}
}

const mapStateToProps = ({ loginStatus: { status }}) => {
	return {
		loginStatus: status
	}
}

export default withRouter(connect(mapStateToProps, {isLoggedIn})(Home));