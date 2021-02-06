import {useContext} from 'react'
//import context
import {AuthContext} from '../contexts/AuthContext/AuthContext';

export const LoggedMiddleware = (history)=>{
    const {login} = useContext(AuthContext);
    if(login){
        history.push('/home');
    }
}