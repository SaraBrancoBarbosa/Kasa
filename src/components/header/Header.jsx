import { Link } from 'react-router-dom'
import "./header.css"

const logo = "/assets/logo/logo.svg"

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo du site Kasa. Le lien mène à la page d'accueil." />
            </Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    )
}

export default Header



