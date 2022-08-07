import "./Register.css"
import loginUserImg from "../login/user1.png"
import { Link } from "react-router-dom"
export const Register = () => {
   return (
      <div className="container-register">
         <div className="image-wrapper">
            <img src={loginUserImg}></img>
         </div>

         <div className="login-form-wrapper">
            <p className="member-login">Member Register</p>
            <form className="login-form">

               <div className="login-inputs-wrapper">
                  <input className="email-input general-input" type="email" name="email" placeholder="Email"></input>
                  <input className="register-password-input general-input" type="any" name="password" placeholder="Password"></input>
                  <input className="repeat-password-input general-input" type="any" name="repeat-password" placeholder="Repeat Password"></input>
                  <button className="register-btn" type="submit">Register</button>
               </div>

               <div className="router-to-register">
                  <p>Already have an account?</p>
                  <Link to="/login">Login here</Link>
               </div>

            </form>
         </div>
      </div>
   )
}