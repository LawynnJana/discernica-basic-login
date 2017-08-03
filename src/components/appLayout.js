import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { isLoggedIn, logoutUser } from '../actions';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from '../containers/navbar';
import Rooms from '../containers/rooms';
import Home from './home';

const Condos = () => <div className="jumbotron">Condos</div>
const FloorLayouts = () => <div className="jumbotron">FloorLayouts</div>
const Pricing = () => <div className="jumbotron">Pricing</div>

const RenderLayout = props => {
	return(
		<div>
			<NavBar logoutUser={props.logoutUser}/>
			<div className="container">
			<Switch>
        <Route path="/condos" render={ () => <Condos/> }/>
        <Route path="/rooms" render={ () => <Rooms/> }/>
        <Route path="/layouts" render={ () => <FloorLayouts/> }/>
        <Route path="/pricing" render={ () => <Pricing/> }/>
        <Route render={ () => <Home/> }/>
			</Switch>
			</div>
		</div>
	);
}

class AppLayout extends Component {
  constructor(props){
    super(props);
  }
	componentWillMount() {
    console.log(this.props.loginStatus);
		if(!this.props.loginStatus){
			axios.get('http://dev.discernica.com:65525/isloggedin')
        .then((res) => {
          console.log('Response:', res);
          this.props.isLoggedIn(true);
        }).catch((err) => {
           console.log('No logged in. Redirect to login...');
          if(err.response.status === 403){
            this.props.history.push('/login');
          }
        }
    )
	 } 
	}

	render() {
		let toRender = this.props.loginStatus ? <RenderLayout user={this.props.user} {...this.props} /> : <div>Loading...</div>;
		return toRender;
	}
}

const mapStateToProps = ({ loginStatus, user, bankingInfo }) => {
	return {
		loginStatus: loginStatus.status,
    user,
    bankingInfo
	}
}

export default withRouter(connect(mapStateToProps, {isLoggedIn, logoutUser})(AppLayout));