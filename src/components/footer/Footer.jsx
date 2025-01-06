import "./footer.css"

const logoFooter = "public/assets/logo/logo-footer.svg"

function Footer() {
    return (
        <footer className="footer">
            <img className="logo-footer" src={logoFooter} alt="Logo du site Kasa, situé dans le pied de page" />
            <p>© 2020 Kasa. All <span className="mobile-break-line">rights reserved</span></p>
        </footer>
    )
}

export default Footer