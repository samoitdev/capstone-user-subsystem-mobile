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