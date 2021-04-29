import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import activities from './activities/saga';
import users from './users/saga';

export default function* rootSaga() {
    yield all([
        auth(),
        activities(),
        users(),
    ])
}