import Banner from '../../components/banner/Banner'

const Homepage = () => {
    return (
        <>
            <Banner url="/assets/img/banner-homepage.png" title={
                <>Chez vous, <span className="mobile-break-line">partout et ailleurs</span></>
            }/>
            <Banner url="/assets/img/banner-about.png" />
        </>
    )
}

export default Homepage