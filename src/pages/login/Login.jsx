import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Login.css'

const Login = (props) =>
(
    <div className="login">
        <div className="login-form">
            <div className="logo-container">
                <div>
                    <img className="brand-logo" src="http://www.pngmart.com/files/13/Megatron-Transparent-Background.png" alt="logo"/>
                </div>
                <p>Hello! Welcome again.<br /> Please login with your account</p>
            </div>
            <TextField label="Username"/>
            <TextField label="Password" type="password" autoComplete="current-password"/>
            <a className="forgot-password" href="/forgot-password">Forgot Password?</a>
            <Button className="login-button" variant="contained" color="primary">Login</Button>
            <p className="page-terms">By clicking on login, you accept the <a href="/forgot-password">terms, conditions and the privacy policy of Megatroncito.</a></p>
        </div>
        <div className="login-carousel">

        </div>
    </div>
)


export default Login;
