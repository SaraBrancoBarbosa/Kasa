import { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import "./collapse.css"

function Collapse({title, children, defaultValue=false}) {

    const [visible, setVisible] = useState(defaultValue)
    const [height, setHeight] = useState("0px")
    const parentRef = useRef()

    const toggle = () => {
        //return !current
        setVisible(current => !current)
    }
    
    useEffect (() => {
        if(!parentRef.current) return
        setHeight(visible ? parentRef.current.scrollHeight + "px" : "0px")
    },[visible, parentRef])

    useEffect(() => {
        setVisible(defaultValue)
    }, [defaultValue])

    return (
        <div className="collapse">
            <div className="collapse-content">
                <h2>{title}</h2>
                <img src="/assets/icons/chevron.svg"
                    onClick={toggle}
                    className={visible ? "chevron-down" : "chevron-up"}
                    alt="Afficher ou cacher le texte."
                />
            </div>
            
            {/* Style: to create a smooth animation */}
            <div 
                className="text-parent" 
                ref={parentRef}
                style={{height}}
            >
                <div 
                    className="text"
                    style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
                >
                    {children}
                    {defaultValue}
                </div>
            </div>
        </div> 
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    defaultValue: PropTypes.bool,
}

export default Collapse