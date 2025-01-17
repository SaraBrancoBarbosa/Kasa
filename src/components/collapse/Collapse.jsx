import { useState, useRef } from "react"
import PropTypes from "prop-types"
import "./collapse.css"

function Collapse({title, children}) {
    const [visible, setVisible] = useState(false)

    const parentRef = useRef()
    
    const toggle = () => {
        setVisible(!visible)
    }

    return (
        <div className="collapse">
            <div className="collapse-content">
                <h2>{title}</h2>
                <img src="/public/assets/icons/chevron.svg"
                    onClick={toggle}
                    className={visible ? "chevron-down" : "chevron-up"}
                    alt="Afficher ou cacher le texte."
                />
            </div>
            <div 
                className="text-parent" 
                ref={parentRef} 
                style={ visible ? { height: parentRef.current.scrollHeight + "px" } : {  height: "0px" } }
            >
                <div 
                    className="text"
                    style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
                >
                    {children}
                </div>
            </div>
        </div> 
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Collapse