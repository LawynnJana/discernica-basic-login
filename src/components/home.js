import React, { Component } from 'react';
import _ from 'lodash';
import { fetchBankingInfo } from '../actions';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class Home extends Component {
	constructor(props){
		super(props);
	}
	renderInfo() {
		console.log('Info:',this.props.bankingInfo);
		const arrOfFields = _.map(this.props.bankingInfo.BankAcct, ('fields'));
		console.log('Arr of fields', arrOfFields);
		const columns = [{
	    Header: 'Account Number',
	    accessor: 'AcctNo', // String-based value accessors! 
	    Cell: props => <span style={{fontFamily: 'Helvetica Neue, Helvetica, sans-serif'}}>{props.value}</span>
	  }, 
	  {
	  	Header: props => <span style={{width:'200px !important'}}>Name</span>,
	  	accessor: 'Name',
	  	Cell: props => <span style={{width:'100%',fontFamily: 'Helvetica Neue, Helvetica, sans-serif'}}>{props.value}</span>
	  },
	  {
	    Header: 'Closing Balance',
	    accessor: 'ClosingBalance',
	    Cell: props => <span style={{fontFamily: 'Helvetica Neue, Helvetica, sans-serif'}}>{props.value}</span> //custom
	  },
	  {
	  	Header: 'Last Recorder',
	  	accessor: 'LastRec',
	  }
	  ];
	  return <ReactTable data={arrOfFields} columns={columns}/>
	}
	render() {
		return (<div className="container">
			<div className="row">
			<div className="col-md-12">
		  	<h2>Home</h2>
		 	 	<div className="btn btn-info" onClick={() => this.props.fetchBankingInfo()}>Get Banking Info</div>
		 	 	
		 	 	{!_.isEmpty(this.props.bankingInfo) && this.renderInfo()}
		 	 	</div>
	 	 	</div>
	  </div>)
	}
}

const mapStateToProps = ({ bankingInfo }) => {
	return {
		bankingInfo,
	}
}
export default connect(mapStateToProps, { fetchBankingInfo })(Home);