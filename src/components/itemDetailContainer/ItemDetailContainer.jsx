import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//components
import ItemDetail from '../itemDetail/ItemDetail'
//firebase
import booksDB from '../../services/firestore'
import { getDocs, collection } from 'firebase/firestore'

function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const params = useParams();

  function getProducto() {
    return new Promise((resolve, reject) => {
      const booksList = collection(booksDB, "libros")
      getDocs(booksList).then(result => {
        const dataBooks = result.docs.map(doc => {
          return (
            { ...doc.data(), id: doc.id }
          )
        })
        resolve(dataBooks);
      })
    })
  }

  useEffect(() => {
    getProducto()
      .then(
        (respuesta) => {
          setProducto(respuesta.find(prod => prod.id.toString() === params.id.toString()))
        }
      ).catch(
        (err) => console.log(err)
      );
  }, [params.id]);

  return (
    <div className='container-item'>
      {
        Object.keys(producto).length
          === 0 ?
          <div className='spiner'>
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div> :
          <ItemDetail producto={producto} key={producto.id} />
      }
    </div>
  )
}

export default ItemDetailContainer