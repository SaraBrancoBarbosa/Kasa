import Carousel from "../../components/carousel/Carousel"
import Collapse from "../../components/collapse/Collapse"
import RatingStars from "../../components/ratingStars/RatingStars"
import { rentalsList } from "../../../public/data/rentals.json"
import "./rental.css"

const id = "46d188c5"

function Rental() {

  const rental = rentalsList.find(item => item.id === id)

  return (
    <div>

      <Carousel data={rental} />

      <div className="container">

        <div className="title-and-tags">
          <div className="title-and-location">
            <h1>{rental.title}</h1>
            <p>{rental.location}</p>
          </div>
          <div className="tags">{rental.tags.map((tag, index) => (
            <span className="tag" key={index}>{tag}</span>
          ))}</div>
        </div>

        <div className="host-and-rating">
          <div className="host">

            <div> {rental.host.name.split(" ").map((str, index) => (
              <h3 key={index}>{str}</h3>
            ))}</div>

            <img src={rental.host.picture} alt="Image du propriétaire"/>
          </div>

          <RatingStars data={rental} />
          
        </div>

      </div>
      
      <div>
      <div className="collapses-container rental">
        <Collapse 
          title="Description"
          text={rental.description}
        />
        <Collapse 
          title="Équipements"
          text={rental.equipments.map((equipement, index) => 
            <p key={index}>{equipement}</p>)} 
        />
      </div>
      
    </div>

    </div>
  )
}

export default Rental