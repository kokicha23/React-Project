import logo from "./logo.webp"
import "./Header.css"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="navigation">

            <div className="first-part-of-navigation">
                <div className="logo-and-logo-text-wrapper">
                    <img className="logo" src={logo} alt="no image" />
                    <div className="simari-text">
                        <span>SIMARI</span>
                        <span className="web-shop">web shop</span>
                    </div>
                </div>

                <div className="about-catalog-location">
                    <Link className="about" to="/about">About</Link>
                    <Link className="catalog" to="/catalog">Catalog</Link>
                    <Link className="location" to="/location">Location</Link>
                    <Link className="create" to="/create">Post a plant</Link>
                </div>

            </div>

            <div className="second-part-of-navigation">
                <Link className="login" to="/login">Login</Link>
                <Link className="catalog" to="/register">Register</Link>
                <Link className="location" to="/logout">Logout</Link>
                <Link className="location checkout" to="/logout">Checkout</Link>
            </div>

        </header>

    )
}


