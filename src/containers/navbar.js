import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		 <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <span className="navbar-brand">Edzar</span>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
          	<li><Link to="/" className="active">Home</Link></li>
						<li><Link to="/condos">Condos</Link></li>
						<li><Link to="/rooms">Rooms</Link></li>
						<li><Link to="/layouts">Floor Layouts</Link></li>
						<li><Link to="/pricing">Pricing</Link></li>
						<li><Link to="/pricing" onClick={props.logoutUser}>Logout</Link></li>
	        </ul>
        </div>
      </div>
    </nav>
	)
}


export default NavBar;


  