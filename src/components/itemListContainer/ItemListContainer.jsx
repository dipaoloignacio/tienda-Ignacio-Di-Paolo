import React from 'react'
import ItemCount from '../itemCount/ItemCount';
import { useState } from 'react';

function ItemListContainer() {
  const producto = {
    tipo: 'Pelota',
    stock: 8
  }

  const calcularItems = (cantidad) => {
    console.log("Se agregaron tus productos con exito.");
  }

  return (
    <div >
      <div className='saludo'>
        {producto.tipo}
        <p>disponibilidad: {producto.stock} u.</p>
      </div>
      <div>
        <ItemCount stock={producto.stock} calcStock={calcularItems} />
      </div>
    </div>

  )
}

export default ItemListContainer;