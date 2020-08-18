import React from 'react';
import LoginForm from '../../components/Login-Form/LoginForm'
import Carrusel from  '../../components/Carrusel/Carrusel'
import './Login.css'


const Login = () => {
  return (
   <div className = "general-container" >
        <div className = "Login-Container" >
          <LoginForm/>
        </div>       
        <div className = "Carrusel-Container" >
         <Carrusel/>
        </div>

   </div>
  );
}

export default Login;
