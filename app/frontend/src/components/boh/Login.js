import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { login } from '../../store/session';

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '45vh'
    }
}));


const Login = ({ history }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        const res = await dispatch(login(password));
        if (res.ok) {
            history.replace('/kloie');
            return
        }
    };

    const onPasswordChange = e => {
        setPassword(e.target.value);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField type='password' value={password} onChange={onPasswordChange} />
        </form>
    )
}

export default Login;