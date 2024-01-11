import { useEffect } from "react"
import UseFetch from "../hooks/UseFetch"
import "./styles/residentCard.css"

const ResidentsCard = ({ url }) => {

    const [resident, getResidents] = UseFetch(url)

    useEffect(() => {
        getResidents()
    }, [])

    return (
        <article className="resident">
            <header className="resident_header">
                <img className="resident_img" src={resident?.image} alt="" />
                <div className="resident_status">
                    <div className={`resident_status_circle ${resident?.status}`}></div>
                    <span className="resident_status_value">{resident?.status}</span>
                </div>
            </header>
            <section className="resident_body">
                <h3 className="resident_name">{resident?.name}</h3>
                <hr className="resident_hr"/>
                <ul className="resident_list">
                    <li className="resident_item"><span className="resident_label">SPECIE: </span><span className="resident_value">{resident?.species}</span></li>
                    <li className="resident_item"><span className="resident_label">ORIGIN: </span><span className="resident_value">{resident?.origin.name}</span></li>
                    <li className="resident_item"><span className="resident_label">EPPISODES: </span ><span className="resident_value">{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentsCard