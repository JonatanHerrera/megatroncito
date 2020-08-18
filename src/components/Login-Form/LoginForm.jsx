import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './LoginForm.css'


const LoginForm = () => {
    return (
        <React.Fragment>
        <div className = "General-Container-Login">
        <div className = "Logo-Container" > 
                <img  className  = "Login_Logo"  src="https://movinova.blob.core.windows.net/900845084/LogoPrime.png" alt="Logo_Login"/>
        </div>
        <div className = "Form-Container" >  
                <div className="Hello-continer">
                 Hello! Welcome again.                
                </div>           
                <div className = 'Please-container'>  
                  Please log in with your account.
                </div>
                <TextField id="standard-basic" label="User*" /> <br/>
                <TextField id="standard-password-input" label = "Password*" type="password" autoComplete="current-password"/>               
                <div className = "Forgot-Container">
                    <a href="Forgot_password.html">Forgot password?
                    </a>
                </div>
                 
                <Button   variant="contained" color="primary">LOG IN</Button>
                <div className = "Terms-Container">
                By clicking on login, you accept the<a href="terms.html"> terms, <br/> conditions and the privacy policy of Prime.</a>
                
                </div>
        </div>
        </div>
        </React.Fragment>
    
    )

}

export default LoginForm 