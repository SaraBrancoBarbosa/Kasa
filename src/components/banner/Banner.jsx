import PropTypes from "prop-types"
import "./banner.css"

function Banner({url,title, darkOverlay = false, lightOverlay = false}) {
	return (
			<div className="banner" style={{
				backgroundImage:`url(${url})`
			}}>
				{(darkOverlay || lightOverlay) && (
					<div className={darkOverlay ? "dark-overlay" : "light-overlay"}>
					</div>
				)}
				{title &&
					<h1>{title}</h1>
				}
			</div>
	)
}

Banner.propTypes={
	url:PropTypes.string.isRequired,
	title:PropTypes.node,
	darkOverlay: PropTypes.bool,
	lightOverlay: PropTypes.bool
}

export default Banner