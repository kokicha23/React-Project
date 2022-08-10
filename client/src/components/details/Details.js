import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import * as plantService from "../../service/plantsService"
import "./Details.css"

export const Details = () => {
    const location = useLocation();
    const [data, setData] = useState([])
    console.log(location.pathname.split("/")[3])
    useEffect(() => {
        plantService
            .getOneDetails(location.pathname.split("/")[3])
            .then((plant) => setData(plant))
    }, [])

    return (
        <div className="details-wrapper">
            <img className="detail-img" src={data.imageUrl} />

            <div className="description-wrapper">
                <p className="plant-label">Plant Name:</p>
                <p className="plant-name-description">{data.name}</p>
                <p className="details-label">Details:</p>
                <p className="plant-description-description">{data.description}</p>

                <div className="delete-edit-buttons-wrapper">
                    <Link className="edit-btn" to={`edit/${data._id}`}>Edit</Link>
                    <buttons className="delete-btn">Delete</buttons>
                </div>
            </div>

        </div >
    )
}