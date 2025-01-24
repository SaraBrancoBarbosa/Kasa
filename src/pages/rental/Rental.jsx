import { useNavigate, useParams } from "react-router"
import useFetchRentals from "../../api/Api"
import { useEffect, useState } from "react"
import Carousel from "../../components/carousel/Carousel"
import Collapse from "../../components/collapse/Collapse"
import RatingStars from "../../components/ratingStars/RatingStars"
import "./rental.css"

function Rental() {

  const navigate = useNavigate()
  const {error, loaded, loading, rentalsList} = useFetchRentals()
  const {id} = useParams()
  const [rental, setRental] = useState(null)
  
  // Error 500 management
  useEffect(() => {
      if (error) {
        navigate("/error/",{state:{code:500, message:error}})
      }
  }, [error, navigate])

  // To find the id and manage the 404 error + loaded system
  useEffect(() => {
    if (id && loaded && rentalsList) {
      const rental = rentalsList.find(item => item.id === id)
      if (!rental) {
        navigate("/error/",{state:{code:404, message:"Rental not found"}})
      } else {
        setRental(rental)
      }
    }
  }, [loaded, rentalsList, id, navigate])

  // Loading message
  if (loading || !rental) {
    return (
      <div className="loading">
        Chargement des informations
        <span className="spinner"></span>
      </div>
    )
  }

  return (
    <>
      <Carousel pictures={rental.pictures} />

      <div className="container">

        <div className="title-and-tags">
          <div className="title-and-location">
            <h1>{rental.title}</h1>
            <p>{rental.location}</p>
          </div>
          <div className="tags">{rental.tags.map((tag) => (
            <span className="tag" key={`tag-${tag}`}>{tag}</span>
          ))}</div>
        </div>

        <div className="host-and-rating">
          <div className="host">
            <h3> {rental.host.name}</h3>
            <img src={rental.host.picture} alt="Image du propriétaire"/>
          </div>
          <RatingStars rating={+rental.rating} />
        </div>

      </div>
      
      <div>
        <div className="collapses-container rental">
          <Collapse title="Description">
            {rental.description}
          </Collapse>
          
          <Collapse title="Équipements">
            {rental.equipments.map((equipment) => 
              <p key={`equipment-${equipment}`}>{equipment}</p>)} 
          </Collapse>
        </div>
      </div>
    </>
  )
}

export default Rental