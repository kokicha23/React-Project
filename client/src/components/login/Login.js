import "./Login.css"
import loginUserImg from "./user1.png"
import { Link } from "react-router-dom"
import { login } from "../../service/authService"
import { useNavigate } from "react-router-dom"
import { initialAuthState } from "../../context/authInitialState"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useAuthContext } from "../../context/authContext"

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const Login = () => {
    const navigate = useNavigate()
    const { loginUser } = useAuthContext()

    const submitHandler = async (e) => {
        e.preventDefault();

        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.target))

        if (!email || !password) { alert('All fields must be filled!'); return; };
        if (!emailRegex.test(email)) { alert("Please enter a valid email."); return; }
        if (password.length < 6) { alert("Password should be at least 6 characters"); return; }
        login(email, password)
            .then(authData => {
                loginUser(authData.accessToken, authData.email, authData._id)

                navigate('/')
            })


    }

    return (
        <div className="container-login">
            <div className="image-wrapper">
                <img src={loginUserImg}></img>
            </div>

            <div className="login-form-wrapper">
                <p className="member-login">Member Login</p>
                <form className="login-form" onSubmit={submitHandler}>

                    <div className="login-inputs-wrapper">
                        <input className="email-input general-input" type="email" name="email" placeholder="Email"></input>
                        <input className="password-input general-input" type="password" name="password" placeholder="Password"></input>
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