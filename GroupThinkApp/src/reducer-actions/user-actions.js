import { AsyncStorage } from 'react-native';

export function login() {
	return {
		type: 'LOGIN'
	}
}

export function setUserInfo(info) {
	return {
		type: 'SET_CURRENT_USER',
		info
	}
}

export function logout() {
	return async (dispatch) => {
		try {

			await AsyncStorage.removeItem('@groupthinkmobileapp');

			return  dispatch({
				type: 'LOGOUT'
			});
		} catch (error) {

		}
	}

	
}