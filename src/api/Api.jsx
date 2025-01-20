import { useEffect, useState } from "react"

const useFetchRentals = () => {
    
    const [rentalsList, setRentalsList] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadRentals = async() => {
            setTimeout(() => {
                fetch("/public/data/rentals.json")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setRentalsList(data.rentalsList)
                    setLoaded(true)
                })
                .catch((error) => {
                    console.log(error)
                    setError("Oh non une erreur !")
                })
                .finally(() => {
                    setLoading(false)
                })
            }, 1500)
        } 
        setError(null)
        setLoaded(false)
        setLoading(true)
        loadRentals()
    }, [])
    return {
        rentalsList,
        loading,
        loaded,
        error
    }
}

export default useFetchRentals