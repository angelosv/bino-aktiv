import {
    LOGIN_USER,
    LOGIN_USER_SUCCCES,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    LOGOUT_USER_ERROR,
    LOGOUT_USER_SUCCCES,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_INIT,
    GET_USER_ACTIVITIES_SUCCES,
    GET_USER_DATA_SUCCES,
    GET_USER_DATA,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCCES,
    CHANGE_PASSWORD_ERROR
} from '../../constants/actionType';

const INIT_STATE = {
    user: {},
    isRegistering: false,
    authId: localStorage.getItem('fb_user_id'),
    email: localStorage.getItem('fb_email'),
    error: false,
    loading: false,
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case REGISTER_USER_ERROR:
            return { ...state, loading: false, error: true, authId: action.payload.uid, error: action.payload.error }
        case LOGIN_USER:
            return { ...state, loading: true, error: false }
        case LOGIN_USER_ERROR:
            return { ...state, loading: false, error: true, errorMessage: action.payload }
        case LOGIN_USER_SUCCCES:
            return {
                ...state,
                loading: false,
                authId: action.payload.userId,
                user: {
                    ...state.user,
                    email: action.payload.email,
                },
                error: false,
            };
        case LOGOUT_USER:
            return { ...state, loading: true, error: false };
        case LOGOUT_USER_SUCCCES:
            return {
                ...state, loading: false, error: false, user: {}, authId: null,
            };
        case LOGOUT_USER_ERROR:
            return { ...state, loading: false, error: true, errorMessage: action.payload.error };
        case GET_USER_ACTIVITIES_SUCCES:

        case GET_USER_DATA:
            return {
                ...state, user: {
                    loading: true,
                }
            }
            return { ...state, loading: false, error: false, useractivities: action.payload.data };
        case GET_USER_DATA_SUCCES:
            return {
                ...state, loading: false, error: false, user: {
                    name: action.payload.data.name,
                    surname: action.payload.data.surname,
                    team: action.payload.data.team,
                    gender: action.payload.data.gender,
                    email: action.payload.data.email
                }
            }
        case CHANGE_PASSWORD:
            return {
                ...state, loading: true
            }
        case CHANGE_PASSWORD_SUCCES:
            return {
                ...state, loading: false
            }
        case CHANGE_PASSWORD_ERROR:
            return {
                ...state, loading: false
            }

        default:
            return state;
    }
}