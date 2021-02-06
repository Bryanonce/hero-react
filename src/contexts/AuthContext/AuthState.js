import React,{useReducer} from 'react';
//import context
import {AuthContext} from './AuthContext';
//import custom hook
import {useForm} from '../../hooks/useForm';
//import reducer
import {AuthReducer} from './AuthReducer';
import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    ERROR_CHANGE
} from './types/types'
//import functional component
import {VerifyAuth} from '../../helpers/VerifyAuth';

const initialValue = {
    error: false,
    user: {},
    login: false
}

export const AuthState = (props)=>{
    const [form,handleInputChange] = useForm();
    const [userSigIn,dispatch] = useReducer(AuthReducer,initialValue);
    const {error,user,login} = userSigIn;
    const onSubmitForm = (e,history)=>{
        e.preventDefault();
        const auth = VerifyAuth(form);
        if(!auth.ok){
            return dispatch({
                type: ERROR_CHANGE
            })
        }
        dispatch({
            type: AUTH_LOGIN,
            payload: {
                user: auth.user,
                login: true
            }
        })
        return history.push('/home')
    }
    const onLogOut = ()=>{
        dispatch({
            type: AUTH_LOGOUT
        })
    }

    return (
        <AuthContext.Provider 
            value={{
                form,
                handleInputChange,
                onSubmitForm,
                error,
                login,
                user,
                onLogOut
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}