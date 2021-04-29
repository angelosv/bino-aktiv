import { combineReducers } from 'redux';
import auth from './auth/reducers';
import activities from './activities/reducers';
import users from './activities/reducers';

import dialog from './dialog/reducer';
const reducers = combineReducers({
    auth,
    activities,
    users,
    dialog
});

export default reducers;