import { Link } from "react-router-dom"
import { useAuthContext } from "../../../context/authContext"
import "./Card.css"

export const Card = ({ data }) => {
    const { isAuthenticated, user } = useAuthContext();
    
    return (
        <div className="cardWrapper">
            <img className="plant-photo" src={data.imageUrl}></img>
            <p className="plant-name-card">{data.name}</p>
            <p className="plant-price-card">Price: {data.price}$</p>


            <div className="details-edit-buttons-wrapper">
                {isAuthenticated && data._ownerId == user._id ? <button className="edit-details edit" type="button"><Link to={`edit/${data._id}`}>Edit</Link></button> : ""}

                <button className="edit-details details" type="button"><Link to={`details/${data._id}`}>Details</Link></button>
            </div>


        </div>
    )
}