const initialState = {
	limit: 12,
	offset: 0,
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'SET_FEED_OFFSET': 
			return {
				...state,
				offset: action.offset,
			}
		default: 
		return state; 
	}
}