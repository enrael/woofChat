//@flow
import { combineReducers} from 'redux';
import navReducer from './navigator/reducer';

const appReducer = combineReducers({
	nav: navReducer,
});

export default  appReducer;