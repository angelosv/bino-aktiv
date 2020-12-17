export const storeReset = () => (next) => (reducer, initialState, enhancer) => {
    const resetType = 'FIREBASE_LOGOUT_SUCCESS';
    const enhanceReducer = (state, action) => {
        if (action.type === resetType) {
            // eslint-disable-next-line no-param-reassign
            state = undefined;
        }
        return reducer(state, action);
    };

    return next(enhanceReducer, initialState, enhancer);
};

export default {};
