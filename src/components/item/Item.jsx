import React from 'react'
import ItemCount from '../itemCount/ItemCount';

function Item(props) {
    return (
        <div className='contenedor-procuts'>
            <div >
                <div className='producto'>
                    <img src={props.img} alt="" />
                    <h4>{props.tipo}</h4>
                    <p>disponibilidad: {props.stock} u.</p>
                    <p>precio: $ ${props.price}</p>
                </div>
                <div>
                    <ItemCount stock={props.stock} calcStock={props.cant} />
                </div>
            </div>
        </div>
    );
};

export default Item