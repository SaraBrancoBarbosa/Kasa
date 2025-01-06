import PropTypes from "prop-types"

const Gallery = ({images}) => {
        return (
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                width: "80%",
                justifyContent: "center"
            }}>
                {images && images.map((url, index) => 
                    <div 
                        key={`image-${index}`}
                        style={{
                            maxWidth: "300px",
                            width: "100%",
                            height: "180px",
                            overflow: "hidden",
                            borderRadius: "15px",
                            border: "1px solid black",
                        }}
                    >
                        <img src={url} style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}/>
                    </div>
                )}
            </div>
    )
}
Gallery.propTypes={
    images : PropTypes.array
}

export default Gallery