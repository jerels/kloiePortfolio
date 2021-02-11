import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '45vh'
    }
}))


const Login = () => {
    const classes = useStyles()
    return (
        <form className={classes.form}>
            <TextField />
        </form>
    )
}

export default Login;