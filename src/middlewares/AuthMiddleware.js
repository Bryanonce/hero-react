import { useContext } from 'react'
//import context
import { AuthContext } from '../contexts/AuthContext/AuthContext';

export const AuthMiddleware = (history) => {
    const { login } = useContext(AuthContext);
    if (!login) {
        return history.push('/');
    }
    return null;
}