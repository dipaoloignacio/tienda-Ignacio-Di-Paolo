//from react
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//components
import ItemList from '../itemList/ItemList';
import Err404 from '../404/Err404';
//FireBase
import booksDB from '../../services/firestore';
import { getDocs, collection } from 'firebase/firestore';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(0);
  const [pagination, setPagination] = useState(1);

  const params = useParams();
  
  let arrNumberOfPages = [1, 2, 3, 4, 5, 6, 7, 8];

  function getBooks() {
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
    window.scrollTo(0, 0);

    getBooks()
      .then((respuesta) => {
        if (params.year === undefined) {
          setItems(respuesta.filter((libro) => libro.page === pagination));
        } else {
          setItems(respuesta.filter(b => b.year === parseInt(params.year)));
        }
        setLoading(0);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [params, pagination]);

  const changePages = (numero) => {
    if (numero === 1 && pagination < 8) {
      setPagination(pagination + 1);
    }
    if (numero === -1 && pagination > 1) {
      setPagination(pagination - 1);
    }
  };

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
                    <button onClick={() => changePages(-1)} className="page-link text-dark">Anterior</button>
                  </li>
                  {
                    arrNumberOfPages.map(numberPage => <li key={numberPage} className="page-item">
                      <button onClick={() => setPagination(numberPage)} className="page-link text-dark">{numberPage}</button>
                    </li>)
                  }
                  <li className="page-item">
                    <button onClick={() => changePages(1)} className="page-link text-dark">Siguiente</button>
                  </li>
                </ul>
              </nav>
            </div>
      }
    </div>
  );
}

export default ItemListContainer;
