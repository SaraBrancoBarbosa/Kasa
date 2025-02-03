import PropTypes from "prop-types"
import "./ratingStar.css"

// For the Rental pages: shows the rating score

const RatingStars = ({ rating }) => {

  const starFilled = "assets/icons/StarFilled.svg"
  const starEmpty = "assets/icons/StarEmpty.svg"

    // starFilled according to the rating number, the other stars are grey/empty
    const ratingStarsArr = []
      for (let i = 0; i < 5; i++) {
        ratingStarsArr.push(i < rating ? starFilled : starEmpty)
      }

  return (
    <div className="rating">
        {ratingStarsArr.map((starSrc, index) => (
            <img key={`rating-${index}`} src={starSrc} alt="Notation" />
        ))}
    </div>
  )
}

RatingStars.propTypes = {
    rating: PropTypes.number.isRequired
}
export default RatingStars