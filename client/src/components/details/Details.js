import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import "./Details.css"
import { useAuthContext } from "../../context/authContext"
import { deletePlant, getOneDetails } from "../../service/plantsService"


export const Details = () => {
    const location = useLocation();
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const { isAuthenticated, user } = useAuthContext();


    useEffect(() => {
        getOneDetails(location.pathname.split("/")[3])
            .then((plant) => setData(plant))
    }, [])


    const deleteHandler = (e) => {

        deletePlant(location.pathname.split("/")[3])
            .then(navigate("/catalog"))

        // if (alert("Are you sure that you want to delete that plant?") === true) {

        // }

    }



    return (
        <div className="details-wrapper">
            <img className="detail-img" src={data.imageUrl} />

            <div className="description-wrapper">
                <p className="plant-label">Plant Name:</p>
                <p className="plant-name-description">{data.name}</p>
                <p className="details-label">Details:</p>
                <p className="plant-description-description">{data.description}</p>

                {
                    isAuthenticated && user._id === data._ownerId &&
                    <div className="delete-edit-buttons-wrapper">
                        <Link className="edit-btn-details" to={`edit/${data._id}`}>Edit</Link>
                        <button type="button" onClick={deleteHandler} className="delete-btn">Delete</button>
                    </div>
                }

            </div>

        </div >
    )
}