import React,{useContext} from 'react';
//import react router
import {
    Link,
    useHistory
} from "react-router-dom";
//import context
import {AuthContext} from '../../../../contexts/AuthContext/AuthContext'
//custom hooks
import { useForm } from '../../../../hooks/useForm';
//import styles
import './NavBar.css'

export const NavBar = () => {
    const [form,handleInputChange] = useForm({
        search: ''
    });
    const history = useHistory();
    const {search} = form;
    const {onLogOut} = useContext(AuthContext);
    const handleRedirect = ()=>{
        history.push('/home');
        setTimeout(()=>{
            history.push("/hero/"+search);
        },100)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Heroes App
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/dc">
                                DC Heroes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/mv">
                                Marvel Heroes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button 
                                id="log-out"
                                className="nav-link"
                                onClick={onLogOut}
                            >
                                Log Out
                            </button>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <input 
                            name="search"
                            value={search}
                            className="form-control me-2 input-search"
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            onChange={handleInputChange}
                        />
                        <button 
                            className="btn btn-outline-success"
                            onClick={handleRedirect}
                        >Search</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}