import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './login_reducer';
import fetchUser from './fetchUser';
import bankingInfo from './fetchBankingInfo';


const rootReducer = combineReducers({
	form: formReducer,
	loginStatus: LoginReducer,
	user: fetchUser,
	bankingInfo,
});

export default rootReducer;
