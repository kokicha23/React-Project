import "./Create.css"
import { postPlant } from "../../service/plantsService"
import { useNavigate } from "react-router-dom"
export const Create = () => {

    const navigate = useNavigate()

    const submitHandler = (e) => {

        e.preventDefault()

        const {
            name,
            imageUrl,
            price,
            description
        } = Object.fromEntries(new FormData(e.target))


        if (!name || !imageUrl || !price || !description) { alert('All fields must be filled!'); return; };
        postPlant(Object.fromEntries(new FormData(e.target)))
            .then(navigate("/catalog"))


    }

    return (
        <div className="container-create">
            <div className="create-form-wrapper">
                <p className="member-login">Post a plant</p>
                <form className="create-form" onSubmit={submitHandler}>

                    <div className="create-inputs-wrapper">
                        <input className="plant-name general-input" type="any" name="name" placeholder="Plant name"></input>
                        <input className="plant-img general-input" type="any" name="imageUrl" placeholder="Plant Image"></input>
                        <input className="plant-price general-input" type="number" name="price" placeholder="Price" min={0} step={0.01}></input>
                        <textarea className="plant-description general-input" type="any" name="description" placeholder="Description"></textarea>
                        <button className="create-btn" type="submit">Post</button>
                    </div>

                </form>
            </div>
        </div>
    )
}