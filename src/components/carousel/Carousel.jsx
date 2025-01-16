import PropTypes from "prop-types"
import { useState } from "react"
import "./carousel.css"

const Carousel = ({ data }) => {

    const [slide, setSlide] = useState(0)

    if (!data) {
        return "Aucune location trouvée."
    }

    const totalPictures = data.pictures.length

    const nextSlide = () => {
        setSlide(slide === totalPictures - 1 ? 0 : slide + 1)
    }
        
    const previousSlide = () => {
        setSlide(slide === 0 ? totalPictures - 1 : slide - 1)
    }

    return ( 
        <div className="carousel">

            <img src="../../../public/assets/icons/Arrow-left.svg" className="arrow arrow-left" onClick={previousSlide} alt="Image précédente" />

            {data.pictures.map((picture, idx) => {
                return <img src={picture} key={`picture-${idx}`} className={slide === idx ? "slide" : "slide slide-hidden"}/>
            })}
            
            <img src="../../../public/assets/icons/Arrow-left.svg" className="arrow arrow-right" onClick={nextSlide} alt="Image suivante" />

            <span className="indicator">{slide + 1}/{totalPictures}</span>

        </div>
    )
}

Carousel.propTypes = {
    data: PropTypes.shape({
        pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
}

export default Carousel