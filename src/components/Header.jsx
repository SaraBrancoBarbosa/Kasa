/*
import { Link, NavLink } from 'react-router-dom'
*/
import logo from "../assets/logo/logo.svg"

function Header() {
    return (
        <header>
            <a href="/">
                <img className="logo" src={logo} alt="Logo du site Kasa" />
            </a>
            <nav>
                <a href="/">Accueil</a>
                <a href="/about">À propos</a>
            </nav>
        </header>
    )
}

export default Header

/*
<Link to="/">
    <img className="logo" src={logo} alt="Logo du site Kasa" />
</Link>
<nav>
    <NavLink to="/">Accueil</NavLink>
    <NavLink to="/about">À propos</NavLink>
</nav>
*/