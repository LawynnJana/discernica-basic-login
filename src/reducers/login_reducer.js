import {
	LOGIN
} from '../actions';

const initialState = {
	status:false
}

const LoginReducer = (state = initialState, action) => {
	switch(action.type){
		case LOGIN:
			return action.payload;
		default:
			return state;
	}
}

export default LoginReducer;