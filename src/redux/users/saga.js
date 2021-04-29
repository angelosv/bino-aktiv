import { all, put, takeEvery } from 'redux-saga/effects';
import {
    GET_ALL_USERS,
} from '../../constants/actionType';
import { functions } from '../../firebase';
import { getAllUsersError, getAllUsersSuccess } from '../../redux/users/actions';


function* getAllUsers() {
    try {
        const getAllUsers = functions.httpsCallable('getAllUsers');
        const res = yield getAllUsers()
        yield put(getAllUsersSuccess(res))
    } catch (error) {
        console.log(error)
        yield put(getAllUsersError(error.message))

    }
}

export default function* rooSaga() {
    yield all([
        takeEvery(GET_ALL_USERS, getAllUsers),
    ]);
}