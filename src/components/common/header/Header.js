import logo from "./logo.webp"
import "./Header.css"

export const Header = () =>{
    return(
       <header className="navigation">

            <div className="first-part-of-navigation">
               <div className="logo-and-logo-text-wrapper">
                   <img className="logo" src={logo} alt="no image"/>
                   <div className="simari-text"/>
                   <span>SIMARI</span>
                   <span className="web-shop">web shop</span>
               </div>
                
                <div className="about-catalog-location">
                    <Link className="about" to="/about">About</Link>
                    <Link className="catalog" to="/catalog">Catalog</Link>
                    <Link className="location" to="/location">Location</Link>
                </div>

           </div>

           <div className="second-part-of-navigation">
                    <Link className="about" to="/about">Login</Link>
                    <Link className="catalog" to="/register">Register</Link>
                    <Link className="location" to="/logout">Logout</Link>
           </div>

       </header>

    )
}


