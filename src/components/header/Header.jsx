import { Link, NavLink, useLocation } from "react-router-dom"
import "./header.css"

const logo = "/assets/logo/logo.svg"

function Header() {

    // To underline the active NavLink depending of the current page
    const location = useLocation()
    
    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo du site Kasa. Le lien mène à la page d'accueil." />
            </Link>

            <nav>
                <NavLink to="/" className={location === "" ? "active" : ""}>Accueil</NavLink>
                <NavLink to="/about" className={location === "" ? "active" : ""}>À propos</NavLink>
            </nav>
        </header>
    )
}

export default Header



