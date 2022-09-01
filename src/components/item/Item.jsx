import React from 'react'
import { Link } from 'react-router-dom';

function Item(props) {

    return (
        <div className='contenedor-procuts'>
            <div className='producto'>
                <img src={props.img} alt="" />
                <div className="content-data">
                    <h4>"{props.titulo}"</h4>
                    <p className='resenia'>{props.resenia}</p>
                    <p className='mt-3'>disponibilidad: <strong>{props.stock}</strong> u.</p>
                </div>
                <div>
                    <Link className='btn-detalle' to={`/item/${props.id}`}>Comprar</Link>
                    <p className='mt-5'>precio: <strong>${props.price}</strong> </p>
                </div>
            </div>
        </div>
    );
};

export default Item