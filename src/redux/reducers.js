import { combineReducers } from 'redux';
import auth from './auth/reducers';
import activities from './activities/reducers';
import dialog from './dialog/reducer';
const reducers = combineReducers({
    auth,
    activities,
    dialog
});

export default reducers;