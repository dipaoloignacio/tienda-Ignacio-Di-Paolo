import CartWidget from "../cartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';
import booksDB from '../../services/firestore';
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from "react";

function NavBar() {
    const [items, setItems] = useState([]);

    function traerProductos() {
        return new Promise((resolve, reject) => {
            const booksCollection = collection(booksDB, "libros");
            getDocs(booksCollection).then(result => {
                const dataBooks = result.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                resolve(dataBooks);
            });
        });
    }

    useEffect(() => {
        traerProductos()
            .then((respuesta) => {
                setItems(respuesta)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function arrFilter() {
        let arr = []

        items.forEach(book => {
            arr.push(book.year);
        })

        const arrFiltrado = arr.filter((valor, indice) => {
            return arr.indexOf(valor) === indice;
        }
        );
        return arrFiltrado;
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/cart"><CartWidget /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "btn-nav-activado" : "btn-nav"} aria-current="page" to="/">
                                Biblioteca
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className={"btn-nav dropdown-toggle"} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filtrar por año
                            </NavLink>
                            <ul className="dropdown-menu">
                                {
                                    arrFilter().sort(function (a, b) { return a - b }).map(link => {
                                        return (
                                            <li><Link className="dropdown-item" to={`/category/${link}`}>{link}</Link></li>
                                        )
                                    })
                                }
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