import { Card } from "./card/Card"
import "./Catalog.css"
import * as plantService from "../../service/plantsService"
import { useEffect, useState } from "react"
export const Catalog = () => {
    const [preview, setPreview] = useState([])
    useEffect(() => {
        plantService.getAll()
            .then(plant => setPreview(plant))
    }, [])
    return (
        <div className="catalog-wrapper">
            {preview.length > 0 ?
                preview.map((x) => (
                    <Card key={x._id} data={x} />
                ))
                : <p className="no-items">Sorry, there are no plants for selling right now.</p>
            }
        </div>
    )
}