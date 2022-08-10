import "./Edit.css"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import * as plantService from "../../service/plantsService"

export const Edit = () => {
    const location = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        plantService
            .getOneDetails(location.pathname.split("/")[3])
            .then((plant) => setData(plant))
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        let values = Object.fromEntries(new FormData(e.target))
        console.log(values)
    }


    return (
        <div className="container-edit">
            <div className="edit-form-wrapper">
                <p className="edit-plant">Edit a plant</p>
                <form className="edit-form" onSubmit={submitHandler}>

                    <div className="edit-inputs-wrapper">
                        <label htmlFor="plant-name" className="edit-plant-label">Plant Name</label>
                        <input className="plant-name general-input" type="any" name="plant-name" placeholder="Plant name" defaultValue={data.name} />
                        <label htmlFor="plant-img" className="edit-plant-label">Plant Img</label>
                        <input className="plant-img general-input" type="any" name="plant-img" placeholder="Plant Image" defaultValue={data.imageUrl} />
                        <label htmlFor="plant-price" className="edit-plant-label">Plant Price</label>
                        <input className="plant-price general-input" type="any" name="plant-price" placeholder="Price" defaultValue={data.price} />
                        <label htmlFor="plant-name" className="edit-plant-label">Plant Description</label>
                        <textarea className="plant-description general-input" type="any" name="plant-description" placeholder="Description" defaultValue={data.description}></textarea>
                        <button className="edit-btn" type="submit">Edit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
