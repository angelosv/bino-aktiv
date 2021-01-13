import {
    LOGIN_USER,
    LOGIN_USER_SUCCCES,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    LOGOUT_USER_ERROR,
    LOGOUT_USER_SUCCCES,
    REGISTER_USER,
    REGISTER_USER_INIT,
    REGISTER_USER_SUCCESS,
    DELETE_USER,
    DELETE_USER_SUCCES,
    DELETE_USER_ERROR,
    REGISTER_USER_ERROR,
    UPDATE_USER,
    UPDATE_USER_ERROR,
    UPDATE_USER_SUCCES,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_ERROR,
    CHANGE_PASSWORD_SUCCES,
    GET_USER_DATA_SUCCES,
    GET_USER_DATA,
    GET_USER_DATA_ERROR,
    UPDATE_USER_ACTIVITIES
} from '../../constants/actionType';

export const updateUser = (payload) => ({
    type: UPDATE_USER,
    payload
});

export const updateUserError = () => ({
    type: UPDATE_USER_ERROR
});

export const updateUserSucces = (userId, email) => ({
    type: UPDATE_USER_SUCCES,
    payload: { userId, email }
});


export const loginUser = (payload) => ({
    type: LOGIN_USER,
    payload
});

export const loginUserError = (errorMessage) => ({
    type: LOGIN_USER_ERROR,
    payload: errorMessage
});

export const loginUserSucces = (userId, email) => ({
    type: LOGIN_USER_SUCCCES,
    payload: { userId, email }
});

export const registerUser = (payload) => ({
    type: REGISTER_USER_INIT,
    payload: payload
});

export const registerUserSucces = (email, password) => ({
    type: REGISTER_USER_SUCCESS,
    payload: { email, password }
})

export const registerUserError = (error) => ({
    type: REGISTER_USER_ERROR,
    payload: { error }
})

export const deleteUser = () => ({
    type: DELETE_USER
})

export const deleteUserSucces = () => ({
    type: DELETE_USER
})

export const logOutUser = () => ({
    type: LOGOUT_USER
});

export const logOutUserError = () => ({
    type: LOGOUT_USER_ERROR
});

export const logOutUserSucces = () => ({
    type: LOGOUT_USER_SUCCCES
});

export const changePassword = (email) => ({
    type: CHANGE_PASSWORD,
    payload: email
})

export const changePasswordSucces = (message) => ({
    type: CHANGE_PASSWORD_SUCCES,
    payload: message
})

export const changePasswordError = () => ({
    type: CHANGE_PASSWORD_ERROR
})

export const getUserData = () => ({
    type: GET_USER_DATA
})

export const getUserDataSucces = (payload) => ({
    type: GET_USER_DATA_SUCCES,
    payload
})

export const getUserDataError = (payload) => ({
    type: GET_USER_DATA_ERROR,
    payload
})

export const updateUserActivities = (payload) => ({
    type: UPDATE_USER_ACTIVITIES,
    payload
})