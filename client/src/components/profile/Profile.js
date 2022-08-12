import { useEffect, useState } from "react"
import { useAuthContext } from "../../context/authContext";
import { getByOwner } from "../../service/plantsService"
import "./Profile.css"
import { ProfileCard } from "./profileCard/ProfileCard";


export const Profile = () => {
    const { user } = useAuthContext();
    const [preview, setPreview] = useState([])

    useEffect(() => {
        getByOwner(user._id)
            .then(plant => setPreview(plant))
    }, [])

    return (
        <div className="catalog-wrapper">
            {preview.length > 0 ?
                preview.map((x) => (
                    <ProfileCard key={x._id} data={x} />
                ))
                : <p className="no-items">Sorry, there are no plants posted by you.</p>
            }
        </div>
    )
}