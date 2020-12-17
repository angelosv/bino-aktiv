import {
    ADD_ACTIVITY,
    ADD_ACTIVITY_SUCCES,
    ADD_ACTIVITY_ERROR,
    GET_USER_ACTIVITIES,
    GET_USER_ACTIVITIES_SUCCES,
    GET_USER_ACTIVITIES_ERROR,
    GET_ALL_USERS_ACTIVITIES,
    GET_ALL_USERS_ACTIVITIES_ERROR,
    GET_ALL_USERS_ACTIVITIES_SUCCES
} from '../../constants/actionType';

export const addActivity = (data) => ({
    type: ADD_ACTIVITY,
    payload: data
});

export const addActivitySucces = () => ({
    type: ADD_ACTIVITY_SUCCES
})

export const addActivityError = () => ({
    type: ADD_ACTIVITY_ERROR
})

export const getUserActivities = (uid) => ({
    type: GET_USER_ACTIVITIES,
    payload: { uid }

})

export const getUserActivitiesSucces = (res) => ({
    type: GET_USER_ACTIVITIES_SUCCES,
    payload: res
})

export const getUserActivitiesError = () => ({
    type: GET_USER_ACTIVITIES_ERROR
})

export const getAllUsersActivities = (uid) => ({
    type: GET_ALL_USERS_ACTIVITIES,
    payload: { uid }

})

export const getAllUsersActivitiesSucces = (res) => ({
    type: GET_ALL_USERS_ACTIVITIES_SUCCES,
    payload: res
})

export const getAllUsersActivitiesError = (error) => ({
    type: GET_ALL_USERS_ACTIVITIES_ERROR,
    payload: error
})