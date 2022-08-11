import "./Register.css"
import loginUserImg from "../login/user1.png"
import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import { register } from "../../service/authService"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { initialAuthState } from "../../context/reducer/authInitialState"
import { useAuthContext } from "../../context/authContext"

export const Register = () => {

   const navigate = useNavigate();
   const { loginUser } = useAuthContext()

   const submitHandler = async (e) => {
      e.preventDefault();

      const {
         email,
         password,
         repeatPassword
      } = Object.fromEntries(new FormData(e.target))
      if (!email || !password || !repeatPassword) { alert('All fields must be filled!'); return; };
      if (password !== repeatPassword) {
         alert('Passwords should match!'); return;
      }
      register(email, password)
         .then(authData => {
            loginUser(authData.accessToken, authData.email, authData._id)
            navigate('/')
         })


   }

   return (
      <div className="container-register">
         <div className="image-wrapper">
            <img src={loginUserImg}></img>
         </div>

         <div className="login-form-wrapper">
            <p className="member-login">Member Register</p>
            <form className="login-form" onSubmit={submitHandler}>

               <div className="login-inputs-wrapper">
                  <input className="email-input general-input" type="email" name="email" placeholder="Email"></input>
                  <input className="register-password-input general-input" type="password" name="password" placeholder="Password"></input>
                  <input className="repeat-password-input general-input" type="password" name="repeatPassword" placeholder="Repeat Password"></input>
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