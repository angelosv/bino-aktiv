import {
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERROR,
} from '../../constants/actionType';

export const getAllUsers = (uid) => ({
    type: GET_ALL_USERS,
    payload: { uid }
})

export const getAllUsersSuccess = (res) => ({
    type: GET_ALL_USERS_SUCCESS,
    payload: res
})

export const getAllUsersError = (error) => ({
    type: GET_ALL_USERS_ERROR,
    payload: error
})