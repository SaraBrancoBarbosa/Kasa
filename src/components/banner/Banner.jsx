import PropTypes from "prop-types"
import "./banner.css"

function Banner({url,title}) {
	return (
		<div className="banner" style={{
			backgroundImage:`url(${url})`
		}}>
			{title && (
				<h1>{title}</h1>
			)}
		</div>
	)
}

Banner.propTypes={
	url:PropTypes.string.isRequired,
	title:PropTypes.object
}

export default Banner