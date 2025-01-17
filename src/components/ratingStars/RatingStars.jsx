import PropTypes from "prop-types"
import "./ratingStar.css"

const RatingStars = ({ data }) => {

  const starFilled = "/public/assets/icons/StarFilled.svg"
  const starEmpty = "/public/assets/icons/StarEmpty.svg"

    const ratingStarsArr = []
      for (let i = 0; i < 5; i++) {
        ratingStarsArr.push(i < data.rating ? starFilled : starEmpty)
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
    data: PropTypes.object.isRequired
}
export default RatingStars