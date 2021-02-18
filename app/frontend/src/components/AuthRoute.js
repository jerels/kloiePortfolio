import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ user, path, component }) => {
    if (!user) {
        return;
    };

    return (
        <>
            <Route path={path} component={component} />
            {path === '/' ? <Redirect to='/kloie' /> : <></>}
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { session: { user } } = state;
    return { user: user, ...ownProps };
};

export default connect(mapStateToProps)(AuthRoute);