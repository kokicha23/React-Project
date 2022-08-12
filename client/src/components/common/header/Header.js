import logo from "./logo.webp"
import "./Header.css"
import { Link } from "react-router-dom"
import { logout } from "../../../service/authService"
import { useLocalStorage } from "../../../hooks/useLocalStorage"
import { initialAuthState } from "../../../context/authInitialState"
import { useAuthContext } from "../../../context/authContext"

export const Header = () => {



    const { logoutUser, user, isAuthenticated } = useAuthContext()

    const logoutHandler = () => {
        logout()
            .then(data => logoutUser())

    }

    return (
        <header className="navigation">

            <div className="first-part-of-navigation">
                <div className="logo-and-logo-text-wrapper">
                    <img className="logo" src={logo} alt="no image"></img>
                    <div className="simari-text">
                        <span>SIMARI</span>
                        <span className="web-shop">web shop</span>
                    </div>
                </div>

                <div className="about-catalog-location">
                    <Link className="welcomePage" to="/">Home</Link>
                    <Link className="about" to="/about">About</Link>
                    <Link className="catalog" to="/catalog">Catalog</Link>
                    {isAuthenticated && <Link className="create" to="/create">Post a plant</Link>}


                </div>

            </div>

            <div className="second-part-of-navigation">


                {user && <span className="email-span">{user.email}</span>}


                {!isAuthenticated ?
                    <>
                        <Link className="login" to="/login">Login</Link>
                        <Link className="catalog" to="/register">Register</Link>
                    </>
                    :
                    <>
                        <Link className="profile" to="/profile">Profile</Link>
                        <Link className="location" onClick={logoutHandler} to="/">Logout</Link>
                    </>
                }
            </div>

        </header >

    )
}


