import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";

export const PrivateRoutes = ({
    login,
    component: Component,
    ...rest
})=>{
    return (
        <Route 
            {...rest}
            render={(props)=>{
                return login?(
                    <Component {...props} />
                ):(
                    <Redirect to="/" />
                )
            }}
        />
    );
}