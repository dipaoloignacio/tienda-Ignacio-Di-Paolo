import React from 'react'
import ItemCount from '../itemCount/ItemCount'

function ItemDetail({ prod }) {
  const calcularStock = (cant) => {
    if (prod.stock < 0) {
      console.log('Lo sentimos el producto esta agotado.')
      prod.stock = 0;
    } else {
      console.log("producto agregado.");
      prod.stock -= cant
    }
  }
  
  return (
    <div className='producto-detail'>
      <img src={prod.img} alt="" />
      <div className='content-details'>
        <h1>{prod.name}</h1>
        <p>disponibilidad: {prod.stock} u.</p>
        <p>precio: ${prod.precio}</p>
        <p>peso: {prod.peso} kg</p>
        <p>Made in: {prod.madeIn}</p>
        <p>metodo de pago aceptado: {prod.tajetaPago}</p>
        <ItemCount stock={prod.stock} calcStock={calcularStock} id={prod.id} />
      </div>
    </div>
  )
}

export default ItemDetail