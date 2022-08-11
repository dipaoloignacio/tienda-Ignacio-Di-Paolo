import React from 'react'
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';

function Item(props) {
    
    return (
        <div className='contenedor-procuts'>
                <div className='producto'>
                    <img src={props.img} alt="" />
                    <h4>{props.tipo}</h4>
                    <p>disponibilidad: {props.stock} u.</p>
                    <p>precio: ${props.precio}</p>
                    <Link className='btn-detalle' to={`/item/${props.id}`}>Ver detalles</Link>
                </div>
                <div>
                    <ItemCount stock={props.stock} calcStock={props.cant} id={props.id}/>
                </div>
        </div>
    );
};

export default Item