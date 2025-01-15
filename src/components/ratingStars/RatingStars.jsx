import PropTypes from "prop-types"
import starFilled from "../../../public/assets/icons/StarFilled.svg"
import starEmpty from "../../../public/assets/icons/StarEmpty.svg"
import "./ratingStar.css"

const RatingStars = ({ data }) => {

    const ratingStarsArr = []
      for (let i = 0; i < 5; i++) {
        ratingStarsArr.push(i < data.rating ? starFilled : starEmpty)
      }

  return (
    <div className="rating">
        {ratingStarsArr.map((starSrc, index) => (
            <img key={index} src={starSrc} alt="Système de notation" />
        ))}
    </div>
  )
}

RatingStars.propTypes = {
    data: PropTypes.object.isRequired
}
export default RatingStars
