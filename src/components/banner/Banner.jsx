import PropTypes from "prop-types"
import "./banner.css"

function Banner({url, children, theme = "default"}) {
	return (
			<div className="banner" style={{
				backgroundImage:`url(${url})`
			}}>
				{/* Different overlay for Homepage and About */}
				<div className={ `content ${theme}-overlay`}>
					{children}
				</div>
			</div>
	)
}

Banner.propTypes={
	url:PropTypes.string.isRequired,
	children:PropTypes.node,
	theme: PropTypes.oneOf(["default", "dark", "light", "darker", "lighter"]),
	lightOverlay: PropTypes.bool
}

export default Banner