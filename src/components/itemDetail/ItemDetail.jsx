import React from 'react'
import ItemCount from '../itemCount/ItemCount'

function ItemDetail({ producto }) {
  const calcularStock = (cant) => {
    if (producto.stock < 0) {
      console.log('Lo sentimos el producto esta agotado.')
      producto.stock = 0;
    } else {
      console.log("producto agregado.");
      producto.stock -= cant
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