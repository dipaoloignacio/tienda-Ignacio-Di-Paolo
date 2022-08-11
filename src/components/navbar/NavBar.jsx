import CartWidget from "../cartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';
function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><CartWidget /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "btn-nav-activado" : "btn-nav"} aria-current="page" to="/">
                                Productos
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className={"btn-nav dropdown-toggle"} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filtrar por tipo
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/category/Stone">Stone</Link></li>
                                <li><Link className="dropdown-item" to="/category/Granite">Granite</Link></li>
                                <li><Link className="dropdown-item" to="/category/Vinyl">Vinyl</Link></li>
                                <li><Link className="dropdown-item" to="/category/Glass">Glass</Link></li>
                                <li><Link className="dropdown-item" to="/category/Plexiglass">Plexiglass</Link></li>
                                <li><Link className="dropdown-item" to="/category/Steel">Steel</Link></li>
                                <li><Link className="dropdown-item" to="/category/Brass">Brass</Link></li>
                                <li><Link className="dropdown-item" to="/category/Wood">Wood</Link></li>
                                <li><Link className="dropdown-item" to="/category/Aluminum">Aluminum</Link></li>
                                <li><Link className="dropdown-item" to="/category/Plastic">Plastic</Link></li>
                                <li><Link className="dropdown-item" to="/category/Rubber">Rubber</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;