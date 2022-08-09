import "./Search.css"
import searchImg from "./searchImg.png"
export const Search = () => {
    return (

        <form className="search-bar">
            <div className="search-wrapper">
            <input className="search-input" type="text" placeholder="Search" />
            <button className="search-submit" type="submit"><img className="search-img" src={searchImg} /></button>
            </div>
        </form>
    )
}