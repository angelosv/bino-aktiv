import { call, all, put, takeEvery, select } from 'redux-saga/effects';
import {
    ADD_ACTIVITY,
    GET_ALL_USERS_ACTIVITIES_SUCCES,
    GET_USER_ACTIVITIES,
    GET_ALL_USERS_ACTIVITIES
} from '../../constants/actionType';
import { auth, functions } from '../../firebase';
import {
    addActivitySucces,
    addActivityError,
    dialogInfoOn

} from '../actions'
import { getAllUsersActivitiesError, getAllUsersActivitiesSucces, getUserActivitiesError, getUserActivitiesSucces } from './actions';
import { notifySucces, notifyError } from '../../components/Dialog/'

function* addActivity({ payload }) {
    console.log('payload:', payload)
    const { uid, type, date, duration, team } = payload;
    try {
        const addActivity = functions.httpsCallable('addActivity');
        const res = yield addActivity({
            uid: uid,
            type: type,
            date: date,
            duration: duration,
            team: team,
        })
        console.log(res)
        yield put(addActivitySucces(res))
        yield notifySucces("Aktivitet lagret!")

    } catch (error) {
        yield put(addActivityError(error.message))
        yield notifyError("Aktiviteten kunne ikke lagres. Vennligst prøv igjen.")

    }
}

function* getUserActivities({ payload }) {

    try {
        const getUserActivities = functions.httpsCallable('getUserActivities');
        const res = yield getUserActivities()
        console.log(res)
        yield put(getUserActivitiesSucces(res))
    } catch (error) {
        console.log(error)
        yield put(getUserActivitiesError(error.message))

    }

}


function* getAllUsersActivities({ payload }) {

    try {
        const getAllUsersActivities = functions.httpsCallable('getAllUsersActivities');
        const res = yield getAllUsersActivities()
        console.log(res)
        yield put(getAllUsersActivitiesSucces(res))
    } catch (error) {
        console.log(error)
        yield put(getAllUsersActivitiesError(error.message))

    }

}



export default function* rooSaga() {
    yield all([
        takeEvery(ADD_ACTIVITY, addActivity),
        takeEvery(GET_USER_ACTIVITIES, getUserActivities),
        takeEvery(GET_ALL_USERS_ACTIVITIES, getAllUsersActivities)
    ]);
}