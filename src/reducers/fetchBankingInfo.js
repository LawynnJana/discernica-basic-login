import {FETCH_INFO} from '../actions';

const BankingInfo = (state={}, action) => {
	switch(action.type){
		case FETCH_INFO:
			console.log('Fetched banking info', action.payload);
			return action.payload;
		default: 
			return state;
	}
}

export default BankingInfo;