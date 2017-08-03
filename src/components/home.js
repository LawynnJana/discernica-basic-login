import React, { Component } from 'react';
import _ from 'lodash';
import { fetchBankingInfo } from '../actions';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Home extends Component {
	constructor(props){
		super(props);
	}
	renderInfo() {
		const arrOfFields = _.map(this.props.bankingInfo.BankAcct, ('fields'));
		console.log('Arr of fields', arrOfFields);
		const columns = [
		{
			Header: 'Discernica Tings',
			columns:
			[{
		    Header: 'Account Number',
		    accessor: 'AcctNo', // String-based value accessors! 
		    Cell: props => <span style={{fontFamily: 'Helvetica Neue, Helvetica, sans-serif'}}>{props.value}</span>
		  }, 
		  {
		  	Header: props => <span>Name</span>,
		  	headerClassName: "name-header",
		  	accessor: 'Name',
		  	Cell: props => <span style={{fontFamily: 'Helvetica Neue, Helvetica, sans-serif'}}>{props.value}</span>
		  },
		  {
		    Header: 'Closing Balance',
		    accessor: 'ClosingBalance',
		    Cell: props => <span style={{fontFamily: 'Helvetica Neue, Helvetica, sans-serif'}}>{props.value}</span> //custom
		  },
		  {
		  	Header: 'Last Recorded',
		  	accessor: 'LastRec',
		  }]
		}
	  ];
	  return <ReactTable className="-striped -highlight" data={arrOfFields} columns={columns}/>
	}
	render() {
		return (<div className="container">
			<div className="row">
			<div className="col-md-12">
		  	<div className="panel panel-info">
			  	<div className="panel-heading">Home</div>
			  	<div className="panel-body">
				 	 	<div className="btn btn-info" onClick={() => this.props.fetchBankingInfo()}>Get Banking Info</div>
				 	 	<hr/>
				 	 	{!_.isEmpty(this.props.bankingInfo) && this.renderInfo()}
				 	 	</div>
			 	 	</div>		
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