import React,{useEffect, useReducer} from 'react';
//import context
import {AuthContext} from './AuthContext';
//import custom hook
import {useForm} from '../../hooks/useForm';
import {useStorage} from '../../hooks/useStorage';
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
};

const method = "login";

export const AuthState = React.memo((props)=>{
    const [value,setValue] = useStorage({
        initialValue,
        method
    });
    console.log(value);
    const [form,handleInputChange] = useForm();
    const [userSigIn,dispatch] = useReducer(AuthReducer,initialValue);
    const {error,user,login} = userSigIn;

    useEffect(()=>{
        if(value){
            if(value.login){
                dispatch({
                    type: AUTH_LOGIN,
                    payload: {
                        user: {
                            nombre: value.name,
                            email: value.email
                        },
                        login: true
                    }
                })
            }
        }
    },[value])

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
        setValue({
            nombre:   auth.user[0].nombre,
            email: auth.user[0].email,
            login: true
        });
        return history.push('/home')
    }
    const onLogOut = ()=>{
        dispatch({
            type: AUTH_LOGOUT
        })
        setValue({
            nombre: '',
            email: '',
            login: false
        });
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
})