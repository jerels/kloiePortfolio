import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from './components/boh/Login';
import AuthRoute from './components/AuthRoute';


function App() {

    useEffect(() => {
        const getCSRF = async () => {
            const res = await fetch('/api/session/csrf');
            if (res.ok) {
                return;
            }
        }
        getCSRF();
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
