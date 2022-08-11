import React from 'react'
import ItemList from '../itemList/ItemList';
import productos from '../../productos/productos'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [prod, setProd] = useState([]);
  const params = useParams();

  function traerProductos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(productos) }, 2000);
    });
  }

  useEffect(() => {
    traerProductos()
      .then((respuesta) => {
        if (params.tipo === undefined) {
          setProd(respuesta)
        } else {
          setProd(respuesta.filter(p => p.name === params.tipo));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  return (
    <div className='content-prod'>
      <ItemList products={prod} />
    </div>
  )
}

export default ItemListContainer;
