import React, { Fragment, useContext } from 'react';
//React Router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
//import router secure
import { PrivateRoutes } from '../Secure/PrivateRoutes';
//Import Components
import { Login } from '../Auth/Login';
import { Heroes } from '../Heroes/Heroes';
import { HeroesDC } from '../Heroes/HeroesDC';
import { HeroesMV } from '../Heroes/HeroesMV';
import { SearchHero } from '../Heroes/SearchHero';
import { NavBar } from './Layout/NavBar/NavBar';
//importar el contexto
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
//import styles
import './System.css';

export const System = () => {
    const { login, onLogOut } = useContext(AuthContext)
    return (
        <div className="route-container">
            <Router>
                <Fragment>
                    {login ? <NavBar onLogOut={onLogOut} /> : null}
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={(props)=>{
                                return login?
                                    <Redirect to="/home" />
                                :
                                    <Login {...props} />
                            }}
                        />
                        <PrivateRoutes
                            login={login}
                            exact={true}
                            path='/home'
                            component={Heroes}
                        />
                        <PrivateRoutes
                            login={login}
                            exact={true}
                            path='/hero/:search'
                            component={SearchHero}
                        />
                        <PrivateRoutes
                            login={login}
                            exact={true}
                            path='/home/dc'
                            component={HeroesDC}
                        />
                        <PrivateRoutes
                            login={login}
                            exact={true}
                            path='/home/mv'
                            component={HeroesMV}
                        />
                        <Redirect to="/" />
                    </Switch>
                </Fragment>
            </Router>
        </div>
    );
}