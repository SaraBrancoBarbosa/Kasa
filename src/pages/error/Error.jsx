// To display the 404 error page
import { Link } from 'react-router-dom'
import "./error.css"

function Error() {
    return (
        <div className="error">
            <h1>404</h1>
            <h2>Oups ! La page que vous demandez n&apos;existe pas.</h2>
            <Link to="/">
                <h3>Retourner sur la page d&apos;accueil</h3>
            </Link>
        </div>     
    )
}

export default Error