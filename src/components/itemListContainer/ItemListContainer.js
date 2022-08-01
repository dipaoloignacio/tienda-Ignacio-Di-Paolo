import React from 'react'
import ItemCount from '../itemCount/ItemCount';
import { useState } from 'react';

function ItemListContainer() {
  
  const producto = {
    tipo: 'Pelota',
    stock: 8,
    onAdd: 1
  }

  return (
    <div >
      <div className='saludo'>
        {producto.tipo}
        <p>disponibilidad: {producto.stock} u.</p>
      </div>

      <div>
        <ItemCount producto={producto} />
      </div>
    </div>

  )
}

export default ItemListContainer;