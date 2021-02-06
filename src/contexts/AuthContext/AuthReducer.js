import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    ERROR_CHANGE
} from './types/types'

export const AuthReducer = (state, action) => {
    switch(action.type){
        case ERROR_CHANGE:
            return {
                ...state,
                error: true
            };
        case AUTH_LOGIN:
            return {
                ...state,
                user: action.payload.user,
                login: true
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                user: {},
                login: false
            }
        default:
            return state;
    }
}