import axios from 'axios';

export const LOGIN = 'LOGIN';
export const FETCH_USER = 'FETCH_USER';

export const isLoggedIn = status => {
	return {
		type: LOGIN,
		payload: status
	}
}

export const loginUser = ({ username, password }) => {
	return dispatch => {
		axios.post('http://dev.discernica.com:65525/login', {username, password}).then( res => {
			dispatch({
				type: 'FETCH_USER',
				payload: res
			}).catch( err => {
				alert('Error loggin in user!');
			});
		});
	}	
}