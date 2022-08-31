import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContex } from '../../custom-context/CartContext';
import Swal from 'sweetalert2';

function Item(props) {
    const { agregarAlCarro } = useContext(cartContex)

    const addItem = (cantidad) => {
        if (props.stock < cantidad) {
            //alerta de SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Producto agotado!',
            })
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Agregado con exito',
                showConfirmButton: false,
                timer: 1500
            })
            agregarAlCarro(props, cantidad);
        }
    }

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