import React, { Fragment } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './Login-Form.css';

export const LoginForm = (props) => {
    return (
        <Fragment>
            <div className="logo-container">
                <div>
                    <img className="brand-logo" src="http://www.pngmart.com/files/13/Megatron-Transparent-Background.png" alt="logo"/>
                </div>
                <p>Hello! Welcome again.<br /> Please login with your account</p>
            </div> 
            <TextField required={true} label="Username"/>
            <TextField required={true} label="Password" type="password" autoComplete="current-password"/>
            <a className="forgot-password" href="/forgot-password">Forgot Password?</a>
            <Button className="login-button" variant="contained" disabled={false}>Login</Button>
            <p className="page-terms">By clicking on login, you accept the <a href="/forgot-password">terms, conditions and the privacy policy of Megatroncito.</a></p>
        </Fragment>
    )
}

export default LoginForm;
