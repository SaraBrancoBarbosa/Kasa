import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Gallery from '../../components/gallery/Gallery'

const id = "46d188c5"

const Rental = () => {

  const [rentals, setRentals] = useState(null)

    useEffect(() => {
        const fetchData = async (setRentals) => {
            await fetch("public/data/rentals.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`)
                }
                return response.json()
            })
            .then(database => {
                console.log(database)
                setRentals(database.rentals)
            })
            .catch(error => {
                console.error("Error getting the rental list:", error)
            }) 
        }
        if (setRentals)
            fetchData(setRentals)
    },[setRentals])

  return (
    <>
      <Header />

      <Gallery 
        images={
          rentals ? 
            rentals.find(r => r.id === id).pictures
            : null
        } 
      />

      <Footer />
    </>
  )
}

export default Rental
