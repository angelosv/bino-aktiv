import {
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERROR,
} from '../../constants/actionType';

const INIT_STATE = {
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return { ...state, loading: true, error: false };
        case GET_ALL_USERS_SUCCESS:
            return { ...state, loading: false, error: false, all: action.payload.data };
        case GET_ALL_USERS_ERROR:
            return { ...state, loading: false, error: false };

        default:
            return state;
    }
}