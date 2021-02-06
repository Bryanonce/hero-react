import React from 'react';
//import functional COmponents
import {System} from './components/SystemRoute/System';
//import providers
import {AuthState} from './contexts/AuthContext/AuthState';

export const HeroesApp = ()=>{
    return (
        <AuthState>
            <System />
        </AuthState>
    );
}