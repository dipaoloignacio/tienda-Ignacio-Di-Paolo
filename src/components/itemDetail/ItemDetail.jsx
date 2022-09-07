import React, { useState } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { cartContex } from '../../custom-context/CartContext';
import { useContext } from 'react';

function ItemDetail({ producto }) {
  const [addProduct, setAddProduct] = useState(0);
  const { agregarAlCarro } = useContext(cartContex);

  const addItem = (cantidad) => {
    if (producto.stock < cantidad) {
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
      agregarAlCarro(producto, cantidad);
      setAddProduct(cantidad);
    }
  }

  return (
    <div className='producto-detail'>
      <img src={producto.img} alt="" />
      <div className='content-details'>
        <h1>"{producto.titulo}"</h1>
        <p className='p-2'>"{producto.resenia}"</p>
        <p className='pb-2'>anio: <strong>{producto.year}</strong></p>
        <p className='pb-2'>disponibilidad: <strong>{producto.stock} u.</strong></p>
        <p className='pb-2'>precio: <strong>${producto.price}</strong></p>
        {
          addProduct === 0 ?
            <div className='count'>
              < ItemCount
                stock={producto.stock}
                addItem={addItem}
              />
            </div>

            : <Link className='toCart' to="/cart">Ir al carro</Link>
        }
      </div>
    </div>
  )
}

export default ItemDetail