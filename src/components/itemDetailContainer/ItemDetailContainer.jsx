import React, { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import productos from '../../productos/productos'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const params = useParams();

  function getProducto() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(productos), 1)
    })
  }

  useEffect(() => {
    getProducto()
      .then(
        (respuesta) => {
          setProducto(respuesta.find(prod => prod.id === parseInt(params.id)))
        }
      ).catch(
        (err) => console.log(err)
      );
  }, [])

  return (
    <div className='container-item'>
      {
        Object.keys(producto).length
          === 0 ?
          <div className='spiner'>
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          : <ItemDetail producto={producto} />
      }

    </div>
  )
}

export default ItemDetailContainer