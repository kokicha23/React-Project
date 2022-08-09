import "./Create.css"

export const Create = () => {
    return (
        <div className="container-create">
            <div className="create-form-wrapper">
                <p className="member-login">Post a plant</p>
                <form className="create-form">

                    <div className="create-inputs-wrapper">
                        <input className="plant-name general-input" type="email" name="plant-name" placeholder="Plant name"></input>
                        <input className="plant-img general-input" type="any" name="plant-img" placeholder="Plant Image"></input>
                        <input className="plant-price general-input" type="any" name="plant-price" placeholder="Price"></input>
                        <textarea className="plant-description general-input" type="any" name="plant-description" placeholder="Description"></textarea>
                        <button className="create-btn" type="submit">Post</button>
                    </div>

                </form>
            </div>
        </div>
    )
}