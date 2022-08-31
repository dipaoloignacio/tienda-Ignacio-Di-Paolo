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
  const [pagination, setPagination] = useState(1);
  const params = useParams();
  let arr = [1, 2, 3, 4, 5, 6, 7, 8]

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
        if (params.year === undefined) {
          setItems(respuesta.filter((libro) => libro.page === pagination));
          setLoading(0)
        } else {
          setItems(respuesta.filter(b => b.year === parseInt(params.year)));
          setLoading(0)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params, pagination]);

  const prev = () => {
    if (pagination > 1) {
      setPagination(prev => prev - 1);
    }
  }

  const next = () => {
    if (pagination < 8) {
      setPagination(next => next + 1);
    }
  }

  return (
    <div>
      {
        loading === 1 && items.length === 0 ?
          <div className="spinner-border text-secondary aling-self-center" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          :
          loading === 0 && items.length === 0 ?
            <Err404 />
            :
            <div className='content-prod'>

              <div className="books-list">
                <ItemList products={items} />
              </div>

              <nav aria-label="Page navigation example mt-5 mb-5">
                <ul className={params.year === undefined ? "pagination justify-content-center mt-5 mb-5" : 'd-none'}>
                  <li className="page-item">
                    <button onClick={() => prev()} className="page-link text-dark">Anterior</button>
                  </li>
                  {
                    arr.map(pagination => <li className="page-item">
                      <button onClick={() => setPagination(pagination)} className="page-link text-dark">{pagination}</button>
                    </li>)
                  }
                  <li class="page-item">
                    <button onClick={next} className="page-link text-dark">Siguiente</button>
                  </li>
                </ul>
              </nav>

            </div>
      }
    </div>
  )
}

export default ItemListContainer;
