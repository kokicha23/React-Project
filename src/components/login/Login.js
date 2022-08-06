import "./Login.css"
import loginUserImg from "./user1.png"
import { Link } from "react-router-dom"
export const Login = () => {
    return (
        <div className="container-login">
            <div className="image-wrapper">
                <img src={loginUserImg}></img>
            </div>

            <div className="login-form-wrapper">
                <p className="member-login">Member Login</p>
                <form className="login-form">

                    <div className="login-inputs-wrapper">
                        <input className="email-input general-input" type="email" name="email" placeholder="Email"></input>
                        <input className="password-input general-input" type="any" name="password" placeholder="Password"></input>
                        <button className="login-btn" type="submit">Login</button>
                    </div>

                    <div className="router-to-register">
                        <p>Don`t have an account?</p>
                        <Link to="/register">Register here</Link>
                    </div>

                </form>
            </div>
        </div>
    )

}