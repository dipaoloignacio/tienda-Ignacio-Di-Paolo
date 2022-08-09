import React from 'react'
import ItemList from '../itemList/ItemList';
import productos from '../../productos/productos'
import { useState, useEffect } from 'react';

function ItemListContainer() {

  const [prod, setProd] = useState([]);
  
  function traerProductos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(productos), 2000);
    });
  }

  useEffect(() => {
    traerProductos()
      .then((respuesta) => {
        setProd(respuesta);
        console.log(respuesta)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='content-prod'>
      <ItemList products={prod} />
    </div>
  )
}

export default ItemListContainer;
