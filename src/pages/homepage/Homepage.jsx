import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'

const Homepage = () => {
    return (
        <>
            <Header />

            <Banner url="public/assets/img/banner-homepage.png" title={
                <>Chez vous, <span className="mobile-break-line">partout et ailleurs</span></>
            }/>
            <Banner url="public/assets/img/banner-about.png" />

            <Footer />
        </>
    )
}

export default Homepage