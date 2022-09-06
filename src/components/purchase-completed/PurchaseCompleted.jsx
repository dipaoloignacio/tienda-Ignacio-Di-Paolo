import React, { useEffect } from 'react'
import booksDB from '../../services/firestore'
import { getDocs, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function PurchaseCompleted() {
  const [buyer, setBuyer] = useState([])
  const params = useParams();

  function traerProductos() {
    return new Promise((resolve, reject) => {
      const buyers = collection(booksDB, "order");
      getDocs(buyers).then(result => {
        const dataBuyers = result.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
        resolve(dataBuyers);
      });
    });
  }

  useEffect(() => {
    traerProductos()
      .then((respuesta) => {
        setBuyer(respuesta.filter(buyer => buyer.id.toString() === params.id.toString()));
      })
  }, [params.id]);

  return (
    <div>
      {
        buyer.length === 0 ?
          <div className='list-container'>
            <div className="spinner-border text-secondary aling-self-center" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          :
          <div className="jumbotron text-center">
            <h1 className="display-3 mt-5 mb-3">Gracias {buyer[0].buyer.name} por tu compra!</h1>
            <p className="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
            <h5 className='mt-3 mb-5'>compraste:</h5>
            <ul style={{ listStyle: 'none', width: '300px', display: 'block', margin: '0 auto' }}>
              {
                buyer[0].books.map(book => {
                  return (
                    <li key={book.id} className='mt-4 mb-3 d-flex gap-3'>
                      <img style={{ width: '50px' }} src={book.img} alt="" />
                      <h6 >"{book.titulo}"</h6>
                    </li>
                  )
                })
              }
            </ul>
            <p>Por un total de : $ <strong className='fs-5'>{buyer[0].toPay}</strong></p>
            <p> Tu ID de seguimiento es : <strong> {buyer[0].id}</strong></p>
            <p>
              Having trouble? <a href="https://bootstrapcreative.com/">Contact us</a>
            </p>
            <p className="lead ">
              <Link className="btn btn-dark w-25" to="/" role="button">Continuar comprando</Link>
            </p>
          </div>
      }
    </div>
  )
}

export default PurchaseCompleted