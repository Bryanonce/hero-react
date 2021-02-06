import React, { useContext } from 'react';
//import context
import { AuthContext } from '../../contexts/AuthContext/AuthContext'
//import styles
import './Login.css';
//import functional components
import { Alert } from './Alert';

export const Login = ({history}) => {
    const { form, handleInputChange, onSubmitForm, error } = useContext(AuthContext)
    const { email, password } = form
    return (
        <div className="form-container">
            <form
                onSubmit={(e)=>{return onSubmitForm(e,history)}}
            >
                <div className="ingreso">
                    <h2>Ingrese</h2>
                    <div className="form form-group">
                        <label>
                            Email:
                            <input
                                value={email}
                                className="form-control"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Ingrese Email"
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>

                    <div className="form form-group">
                        <label>
                            Password:
                            <input
                                value={password}
                                className="form-control"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Ingrese Password"
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>

                    {
                        error ? <Alert /> : null
                    }

                    <div className="form form-group">
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Ingresar"
                        />
                    </div>

                    <div className="form form-group">
                        <label>
                            <input
                                type="checkbox"
                                defaultChecked
                            />
                            Seguir Conectado?
                        </label>

                    </div>
                </div>
            </form>
        </div>
    );
}