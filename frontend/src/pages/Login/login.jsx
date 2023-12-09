import React from "react";
import './login.css';
//import { Link } from 'react-router-dom';
//import SignUp from '../SignUp/signup';

const Login = () => {
    return(
        <center><div class="login" >
           <div className="login-head">
            <h1>Welcome Back!!</h1>
            <p>Please enter your login details. Or  <a href="/signup" className="link">Signup</a></p>
           </div>

         <form action="POST">
           <label><img src="email.png" height={"30px"} alt="email" className="email" /></label>
              <br />
              <input type="email" placeholder="Username or email" className="form-control" id="email" name="email" required />
              <br />
              <label><img src="pass.png" height={"30px"} alt="password" className="email" /></label>
              <br />
              <input type="password" placeholder="Password" className="form-control" id="password" name="password"/>

              <button type="submit" className="btn" id="sign-in">Login</button>
           </form>
        </div></center>
    )
}

export default Login;