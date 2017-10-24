import { router } from '../navigations.js';

export default (state, action) => {
	const newState = router.getStateForAction(action, state);
	return newState || state;
}