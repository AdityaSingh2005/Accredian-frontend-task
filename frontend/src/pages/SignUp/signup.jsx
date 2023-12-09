import React from "react";
import './signup.css';
import {Link} from "react-router-dom";

const Signup = () => {
    return(
        <center><div class="login" >
           <div className="login-head">
            <h1>Welcome to Accredian</h1>
            <p>Please enter your details. Or  <Link to="/login" className="link">LogIn</Link></p>
           </div>

         <form action="POST">
            <div className="top">
              <label><img src="user.png" height={"30px"} alt="email" className="email" style={{marginRight:"10px"}}/></label>
              
              <input type="text" placeholder="Username" className="form-control" id="user" name="user" required style={{marginRight:"20px"}}/>
              
              <label><img src="email.png" height={"30px"} alt="email" className="email" style={{marginRight:"10px"}} /></label>
              
              <input type="email" placeholder="Email" className="form-control" id="email" name="email" required />
              
              </div>

              <div className="bottom">
              <label><img src="pass.png" height={"30px"} alt="password" className="email" style={{marginRight:"10px"}} /></label>

              <input type="password" placeholder="Password" className="form-control" id="password" name="password" style={{marginRight:"20px"}}/>
              <label><img src="pass.png" height={"30px"} alt="password" className="email"  style={{marginRight:"10px"}}/></label>
             
              <input type="password" placeholder="Confirm Password" className="form-control" id="password" name="password"/>
              </div>

              <button type="submit" className="btn" id="sign-in">SignUp</button>
           </form>
        </div></center>
    )
}

export default Signup;