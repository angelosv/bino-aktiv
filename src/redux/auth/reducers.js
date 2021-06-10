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
    CHANGE_PASSWORD_ERROR,
    UPDATE_USER_ACTIVITIES
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
            return { ...state, loading: false, error: false, useractivities: action.payload.data };

        case UPDATE_USER_ACTIVITIES:
            // const res = state.useractivities.findIndex(fruit => fruit === action.payload)
            //  console.log('resultado ->:', res, 'action: ->', action.payload, 'user activities: =>', state.useractivities)


            var __FOUND = state.useractivities.findIndex(function (post, index) {
                if (post.id == action.payload)
                    return index;
            });
            console.log(__FOUND, 'respuesta')
            var someArray = state.useractivities.slice(0, __FOUND).concat(state.useractivities.slice(-__FOUND));

            // On success __FOUND will contain the index of the element
            // On failure it will contain -1
            console.log(__FOUND, someArray); // 2
            return {
                ...state, loading: false, error: false, useractivities: someArray
            };

        case GET_USER_DATA:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case GET_USER_DATA_SUCCES:
            return {
                ...state, loading: false, error: false, user: {
                    name: action.payload.data.name,
                    surname: action.payload.data.surname,
                    team: action.payload.data.team,
                    gender: action.payload.data.gender,
                    email: action.payload.data.email,
                    isDeleted: (action.payload.data.isDeleted || false)
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