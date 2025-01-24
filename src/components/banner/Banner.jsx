import PropTypes from "prop-types"
import "./banner.css"

function Banner({url, children, theme = "default", shadow = "default"}) {
	return (
			<div 
				className={ `banner ${shadow}`} 
				style={{
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
	shadow: PropTypes.oneOf(["default", "no-drop-shadow"]),
	theme: PropTypes.oneOf(["default", "dark", "light", "darker", "lighter"]),
	lightOverlay: PropTypes.bool
}

export default Banner