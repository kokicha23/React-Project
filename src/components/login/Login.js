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
                <p>Member Login</p>
                <form className="login-form">
                    <input type="email" name="email" placeholder="Email"></input>
                    <input type="any" name="password" placeholder="Password"></input>
                    <button type="submit">Login</button>
                    <p>Don`t have an account? <Link to="/register">Register here</Link></p>
                </form>
            </div>
        </div>
    )

}