import './navbar.css'
import DarkmodeButton from "./DarkmodeButton.jsx";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container d-flex justify-content-between">
                <span className="navbar-brand mb-0 h1">
                    <i className="bi bi-cloud-sun"></i> Wetterstation
                </span>
                <span>
                <DarkmodeButton/>
                </span>
            </div>
        </nav>
    )
}

export default Navbar