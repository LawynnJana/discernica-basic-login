import {
	FETCH_USER
} from '../actions';

const initialState = {}

const fetchUser = (state = initialState, action) => {
	switch(action.type){
		case FETCH_USER:
			return action.payload;
		default:
			return state;
	}
}

export default fetchUser;