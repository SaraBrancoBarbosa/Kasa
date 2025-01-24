import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./card.css"

function Card({id, title, cover}) {
    return (
		<Link to={`./rental/${id}`} className="card">
			<figure>
				<img src={cover} alt="Image du logement" />
				<figcaption>{title}</figcaption>
			</figure>
		</Link>
	)
}

Card.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	cover: PropTypes.string,
}

export default Card
