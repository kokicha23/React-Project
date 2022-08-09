import { Link } from "react-router-dom"
import "./Card.css"
import plantPhoto from "./ligustrum.jpg"
export const Card = () => {
    return (
        <div className="cardWrapper">
            <img className="plant-photo" src={plantPhoto}></img>
            <p className="plant-name-card">Ligustrum</p>
            <p className="plant-price-card">Price: 10$</p>

            <div className="details-edit-buttons-wrapper">
                <button className="edit-details edit" type="button"><Link to="/edit/id">Edit</Link></button>
                <button className="edit-details details" type="button"><Link to="/details/id">Details</Link></button>
            </div>
        </div>
    )
}