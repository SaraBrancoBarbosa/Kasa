import { useState, useRef } from "react"
import "./collapse.css"

function Collapse({title, text}) {
    const [visible, setVisible] = useState(false)

    const parentRef = useRef()


    const toggle = () => {
        setVisible(!visible)
    }

    return (
            <div className="collapse-content">
                <div className="collapse">
                    <h2>{title}</h2>
                    <img src="public/assets/icons/chevron.svg"
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
                    <p className="text">{text}</p>
                </div>
            </div> 
    )
}

export default Collapse