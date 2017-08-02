import { combineReducers } from 'redux';
import LoginReducer from './login_reducer';
import fetchUser from './fetchUser';

const rootReducer = combineReducers({
	loginStatus: LoginReducer,
	user: fetchUser,
});

export default rootReducer;
