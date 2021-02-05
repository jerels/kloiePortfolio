import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import UserList from './components/UsersList';
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
                <Route path="/users">
                    <UserList />
                </Route>

                <AuthRoute path='/' component={ } />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
