import { useEffect } from 'react'
import useFetchRentals from '../../api/Api'
import Banner from '../../components/banner/Banner'
import Card from '../../components/card/Card'
import { useNavigate } from 'react-router'
import "./homepage.css"

const Homepage = () => {

    const navigate = useNavigate()
    const {error, loaded, loading, rentalsList} = useFetchRentals()
    
    // Error 500 management
    useEffect(() => {
        if (error) {
            navigate("/error/",{state:{code:500, message:error}})
        }
    }, [error, navigate])

    return (
        <>
            <Banner 
                url="/assets/img/banner-homepage.png" 
                title={
                    <>Chez vous, <span className="mobile-break-line">partout et ailleurs</span></>
                }
                darkOverlay={true}
            />

            {/* Loading message */}
            {loading && !error && (
                <div className="loading">Chargement des locations
                    <span className="spinner"></span>
                </div>   
            )}

            {loaded && !loading && !error && (
                <div className="cards-container">
                    { rentalsList && rentalsList.map((rental) => (
                        <Card 
                            key={rental.id}
                            id={rental.id}
                            title={rental.title}
                            cover={rental.cover}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default Homepage