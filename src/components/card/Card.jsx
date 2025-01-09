import { Link } from "react-router-dom"
import "./card.css"

function Card(id, title, cover) {
    return (
		<Link to={`./rental/${id}`}>
			<figure className="card">
				<img src={cover} alt="Image du logement" />
				<figcaption> {title} </figcaption>
			</figure>
		</Link>
	)
}

export default Card
