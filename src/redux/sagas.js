import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import activities from './activities/saga';

export default function* rootSaga() {
    yield all([
        auth(),
        activities(),
    ])
}