//@flow
import { Navigator } from './AppWithNavigationState'

const initialState = Navigator.router.getStateForAction(
	Navigator.router.getActionForPathAndParams('Chats'));

const navReducer = (state = initialState, action) => {
	const nextState = Navigator.router.getStateForAction(action, state);
	return nextState || state;
};

export default navReducer;