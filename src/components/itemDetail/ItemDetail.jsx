import React, { useEffect, useState } from 'react'
import ItemCount from '../itemCount/ItemCount'
import Swal from 'sweetalert2';

function ItemDetail({ producto }) {
  const [addProduct, setAddProduct] = useState(producto.stock);

  const calcularStock = (cantidad) => {
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
      producto.stock -= cantidad
      setAddProduct(producto.stock)
    }
  }

  return (
    <div className='producto-detail'>
      <img src={producto.img} alt="" />
      <div className='content-details'>
        <h1>{producto.name}</h1>
        <p>disponibilidad: {producto.stock} u.</p>
        <p>precio: ${producto.precio}</p>
        <p>peso: {producto.peso} kg</p>
        <p>Made in: {producto.madeIn}</p>
        <p>metodo de pago aceptado: {producto.tajetaPago}</p>
        <ItemCount stock={producto.stock} calcStock={calcularStock} id={producto.id} />
      </div>
    </div>
  )
}

export default ItemDetail