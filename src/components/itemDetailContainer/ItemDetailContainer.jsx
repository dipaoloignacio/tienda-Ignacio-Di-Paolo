import React, { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import productos from '../../productos/productos'

function ItemDetailContainer() {
  const [producto, setProducto] = useState({})

  let numRandom = Math.floor(Math.random()*10);
  console.log(numRandom)
  
  function getProducto() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(productos[numRandom]), 2000)
    })
  }

  useEffect(() => {
    getProducto().then(
      (producto) => { setProducto(producto) }
    ).catch(
      (err) => console.log(err)
    );
  }, [])

  return (
    <div>
      <ItemDetail prod={producto} />
    </div>
  )
}

export default ItemDetailContainer