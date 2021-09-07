import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
  
import { useDispatch, useSelector } from 'react-redux';


import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import LoginScreen from '../components/LoginScreen';
import RegisterScreen from '../components/RegisterScreem';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { uid,component } = useSelector( state => state.auth);

    useEffect(() => {

    }, [dispatch])

    // if ( checking ) {
    //     return (<h5>Espere...</h5>);
    // }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ !!uid }
                    />
                     <PublicRoute 
                        exact 
                        path="/register" 
                        component={ RegisterScreen }
                        isAuthenticated={ !!uid }
                    />
                
                    <PrivateRoute 
                        exact 
                        path={`/`}
                        component={ component } 
                        isAuthenticated={ !!uid }
                    />

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}
