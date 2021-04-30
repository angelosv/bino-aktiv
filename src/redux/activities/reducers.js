import {
    ADD_ACTIVITY,
    ADD_ACTIVITY_SUCCES,
    ADD_ACTIVITY_ERROR,
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ACTIVITIES,
    GET_ALL_USERS_ACTIVITIES_ERROR,
    GET_ALL_USERS_ACTIVITIES_SUCCES,
    DELETE_ACTIVITY_SUCCES,
    DELETE_ACTIVITY_ERROR,
    DELETE_ACTIVITY
} from '../../constants/actionType';

const INIT_STATE = {
    loading: false
};

export default (state = INIT_STATE, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case ADD_ACTIVITY:
            return { ...state, loading: true, error: false };
        case ADD_ACTIVITY_SUCCES:
            return { ...state, loading: false, error: false };
        case ADD_ACTIVITY_ERROR:
            return { ...state, loading: false, error: false };
        case GET_ALL_USERS_ACTIVITIES:
            return { ...state, loading: true, error: false };
        case GET_ALL_USERS_SUCCESS:
            return { ...state, loading: true, error: false, };
        case GET_ALL_USERS:
            return { ...state, loading: true, error: false, };
        case GET_ALL_USERS_ACTIVITIES_SUCCES:
            return { ...state, loading: false, error: false, all: action.payload.data };
        case GET_ALL_USERS_ACTIVITIES_ERROR:
            return { ...state, loading: false, error: false };
        case DELETE_ACTIVITY:
            return { ...state, loading: true, error: false };
        case DELETE_ACTIVITY_SUCCES:
            return {
                ...state
                , loading: false, error: false
            };
        case DELETE_ACTIVITY_ERROR:
            return { ...state, loading: false, error: false };

        default:
            return state;
    }
}