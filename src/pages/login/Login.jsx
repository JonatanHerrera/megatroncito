import React from 'react';

import LoginForm from '../../components/login-form/Login-Form';
import Carousel from '../../components/carousel/Carousel';
import './Login.css'

const Login = (props) =>
(
    <div className="login">
        <div className="login-form">
            <LoginForm />
        </div>
        <div className="login-carousel">
            <Carousel />
        </div>
    </div>
)


export default Login;
