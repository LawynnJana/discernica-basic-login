import axios from 'axios';

export const LOGIN = 'LOGIN';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_INFO = 'FETCH_INFO';

export const isLoggedIn = status => {
	return dispatch =>
		dispatch({
			type: LOGIN,
			payload: {
				status
			}
		});
}

export const loginUser = ( userid, password, callback ) => {
	return dispatch => {
		axios.get(`http://dev.discernica.com:65525/login`, {
			params:{
				userid,
				password
			},
			withCredentials:true
		}).then((res) => {
			console.log('Response:', res);
			dispatch(isLoggedIn(true));
		})
		.then(() => { 
			alert('Logged in!'); 
			callback()
		})
		.catch((err) => console.log('Error:', err));
	}	
}

export const fetchBankingInfo = () => {
	return dispatch => {
		console.log('Fetch banking info');
		axios.get('http://dev.discernica.com:65525/call/bank.BankAcctService', {withCredentials:true})
		.then((res) => {
				console.log('res:', res.data);
				dispatch({
					type: FETCH_INFO,
					payload: res.data
				})
			}).catch((err) => {
				console.log(err.response.data);
				console.log(err.response.code);
			})
	}
}

export const logoutUser = (callback) => {
	return dispatch => {
		console.log('Try logout');
		axios.get('http://dev.discernica.com:65525/logout', {withCredentials:true}).then((res) => {
			dispatch(isLoggedIn(false));
			callback();
		})
		.catch((err) => console.log('Err', err));
	}
}

