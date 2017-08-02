import {
	LOGIN
} from '../actions';

const initialState = {}

const LoginReducer = (state = initialState, action) => {
	switch(action.type){
		case LOGIN:
			return action.payload;
		default:
			return state;
	}
}

export default LoginReducer;