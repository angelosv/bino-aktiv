import { call, all, put, takeEvery, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
    REGISTER_USER_INIT,
    REGISTER_USER_SUCCESS,
    LOGIN_USER,
    DELETE_USER,
    LOGOUT_USER,
    UPDATE_USER,
    CHANGE_PASSWORD,
    GET_USER_DATA,
} from '../../constants/actionType';
import { auth, functions } from '../../firebase';
import {
    registerUserSucces,
    registerUserError,
    deleteUserSucces,
    loginUserSucces,
    loginUserError,
    logOutUserSucces,
    getUserDataSucces,
    getUserDataError,
    dialogInfoOn
} from '../actions'
import { changePasswordError, changePasswordSucces } from './actions';

function* loginUserFirebase({ payload }) {
    console.log('entrando a login', payload)
    const { email, password } = payload

    try {
        const res = yield auth.signInWithEmailAndPassword(email, password)
        localStorage.setItem('user_id', res.user.uid);
        localStorage.setItem('email', res.user.email);
        yield put(loginUserSucces(res.user.uid, res.user.email))
        try {
            const getUserdata = functions.httpsCallable('getUser');
            const userData = yield getUserdata();
            console.log(userData, 'ESTO ES USERDATA')

            yield put(getUserDataSucces(userData))
        } catch (error) {
            console.log(error.message)
        }
    }
    catch (error) {
        console.log(error)
        yield put(loginUserError(error.message))
    }
}

function* userUpdate(data) {
    const { payload } = data;
    const { name, surname, gender, team } = payload;
    const uid = localStorage.getItem('user_id');
    console.log('esto es iud:', uid)

    try {
        const updateUser = functions.httpsCallable('updateUser');
        const res = yield updateUser({
            name: name,
            surname: surname,
            gender: gender,
            team: team
        })
    } catch (error) {

    }

}

function* reigisterUserFirebase(data) {
    const { payload } = data
    console.log('payload', payload)
    const { email, password, name, surname, gender, team } = payload;
    try {
        const res = yield auth.createUserWithEmailAndPassword(email, password)
        // localStorage.setItem('user_id', res.user.uid);
        //localStorage.setItem('email', res.user.email);
        const uid = res.user.uid;
        yield put(registerUserSucces(uid, res.user.email))
        const updateUserRegister = functions.httpsCallable('updateUserRegister');
        const userdata = yield updateUserRegister({
            uid: uid,
            name: name,
            surname: surname,
            gender: gender,
            team: team
        })
        console.log(userdata, 'USERDATA')
        yield put(loginUserSucces(userdata))
    } catch (error) {
        console.log(error)
        yield put(registerUserError(error.message))

    }
}

function* getUserData() {
    yield put(dialogInfoOn('sss'));

    console.log('   getting user datas')

    yield put(loginUserSucces(localStorage.getItem('user_id'), localStorage.getItem('email')))
    try {
        const getUserdata = functions.httpsCallable('getUser');
        const userData = yield getUserdata();
        console.log(userData, 'ESTO ES USERDATA')
        yield put(getUserDataSucces(userData))
    } catch (error) {
        console.log(error.message)
    }
}

function* logOutUserFirebase() {
    console.log('estoy en logout')
    yield auth.signOut();
    localStorage.removeItem('user_id');
    localStorage.removeItem('email');
    yield put(logOutUserSucces());

}

function* deleteUserFirebase({ payload }) {
    console.log('delete user')
    auth.deleteUserFirebase();
    yield put(deleteUserSucces())
}

function* changePassword() {
    const user = auth.currentUser;
    const email = user.email;
    try {
        const res = yield auth.sendPasswordResetEmail(email)
        yield put(changePasswordSucces('Email sent'))
    } catch (error) {
        yield put(changePasswordError(error.message))
    }
    console.log(user)

}

export default function* rooSaga() {
    yield all([
        takeEvery(REGISTER_USER_INIT, reigisterUserFirebase),
        takeEvery(DELETE_USER, deleteUserFirebase),
        takeEvery(LOGIN_USER, loginUserFirebase),
        takeEvery(LOGOUT_USER, logOutUserFirebase),
        takeEvery(UPDATE_USER, userUpdate),
        takeEvery(CHANGE_PASSWORD, changePassword),
        takeEvery(GET_USER_DATA, getUserData),
    ]);
}