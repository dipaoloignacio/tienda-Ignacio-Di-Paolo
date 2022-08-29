//from react
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//components
import ItemList from '../itemList/ItemList';
import Err404 from '../404/Err404';
//FireBase
import booksDB from '../../services/firestore';
import { getDocs, collection } from 'firebase/firestore'

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(0);
  const params = useParams();

  function traerProductos() {
    return new Promise((resolve, reject) => {
      const booksCollection = collection(booksDB, "libros");
      getDocs(booksCollection).then(result => {
        const dataBooks = result.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
        resolve(dataBooks);
      });
    });
  }

  useEffect(() => {
    setLoading(1)
    traerProductos()
      .then((respuesta) => {
        if (params.tipo === undefined) {
          setItems(respuesta)
          setLoading(0)
        } else {
          setItems(respuesta.filter(p => p.name === params.tipo));
          setLoading(0)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  return (
    <div>
      {
        loading === 1 && items.length === 0 ?
          <div className='list-container'>
            <div className="spinner-border text-secondary aling-self-center" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          :
          loading === 0 && items.length === 0 ?
            <Err404 />
            :
            <div className='content-prod'>
              <ItemList products={items} />
            </div>
      }
    </div>
  )
}

export default ItemListContainer;
