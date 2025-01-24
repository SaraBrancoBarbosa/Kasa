import PropTypes from "prop-types"
import { useCallback, useEffect, useState } from "react"
import "./carousel.css"

// Carousel component for each rental pages

const Carousel = ({ pictures }) => {
    const [slide, setSlide] = useState(0)
    // For the arrows and number indicator:
    const [showControls, setShowControls] = useState(false)

    // Pictures has to exist to avoid any errors. "Current" represents the current slide.
    const nextSlide = useCallback(() => {
        if (!(pictures)) return
        setSlide((current) => current === pictures.length - 1 ? 0 : current + 1)
    }, [pictures, setSlide])
        
    const previousSlide = useCallback(() => {
        if (!(pictures)) return
        setSlide((current) => current === 0 ? pictures.length - 1 : current - 1)
    }, [pictures, setSlide])

    // If there is only one picture, then the arrows and number indicator are hidden
    useEffect(()=> {
        setShowControls(pictures && pictures.length > 1)
    },[pictures])

    return ( 
        <div className="carousel">

            {showControls && (
                <img src="/assets/icons/Arrow-left.svg" className={`arrow arrow-left`} onClick={previousSlide} alt="Image précédente" />
            )}

            {pictures.length > slide && (
                <img src={pictures[slide]} className={"slide"} alt="Image d'exemple" />
            )}
            
            {showControls && (
                <img src="/assets/icons/Arrow-left.svg" className={`arrow arrow-right`} onClick={nextSlide} alt="Image suivante" />
            )}

            {showControls && (
                <span className={`indicator`}>{slide + 1}/{pictures.length}</span>
            )}

        </div>
    )
}

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carousel