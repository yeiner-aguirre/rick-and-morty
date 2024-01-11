import "./styles/LocationCard.css"
const LocationCard = ({ location }) => {
  return (
    <div className="card_container">
      <article className="card_location">
        <h2 className="name_location">{location?.name}</h2>
        <ul className="list_location">
          <li className="location_item"><span className="location_label">TYPE: </span><span className="location_value">{location?.type}</span></li>
          <li className="location_item"><span className="location_label">DIMENSION: </span><span className="location_value">{location?.dimension}</span></li>
          <li className="location_item"><span className="location_label">POPULATION: </span><span className="location_value">{location?.residents.length}</span></li>
        </ul>
      </article>
    </div>
  )
}

export default LocationCard