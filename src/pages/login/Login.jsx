import React from 'react';
import './Login.css'


const Login = () => {
  return (
   <div className = "general-container" >

        <div className = "Form-Container" >
            <img  className  = "Login_Logo"  src="http://www.pngmart.com/files/13/Megatron-Transparent-Background.png" alt="Logo_Login"/>
            <h3>Hello! Welcome again.</h3>
            <h3>Please log in with your account.</h3>
            <input type="text" placeholder = 'User*'/>  <br/>
            <input type="password" placeholder = 'PassWord*'/> <br/>
            <p><a href="Forgot_password.html">Forgot password?</a></p>
            <button type="button">LOG IN</button>
            <p>By clicking on login, you accept the<a href="terms.html"> terms, <br/> conditions and the privacy policy of Prime.</a></p>

        </div>

        <div className = "ImageCarrusel-Container" >
        </div>

   </div>
  );
}

export default Login;
