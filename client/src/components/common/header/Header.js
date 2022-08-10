import logo from "./logo.webp"
import "./Header.css"
import { Link } from "react-router-dom"

export const Header = () => {
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
                    {/* if there is a user */}
                    <Link className="create" to="/create">Post a plant</Link>
                </div>

            </div>

            <div className="second-part-of-navigation">
                <span className="email-span">email@abv.bg</span>
                <Link className="login" to="/login">Login</Link>
                <Link className="catalog" to="/register">Register</Link>

                <Link className="profile" to="/profile">Profile</Link>
                <Link className="location" to="/logout">Logout</Link>
            </div>

        </header>

    )
}


