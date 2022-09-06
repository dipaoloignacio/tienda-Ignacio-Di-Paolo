import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContex } from '../../custom-context/CartContext';
import Swal from 'sweetalert2';
import UserForm from '../userForm/UserForm';

function Cart() {
  const { cart, deleteItem, deleteCart, toPay } = useContext(cartContex);

  function eliminar(indice) {
    deleteItem(indice);
  }

  function vaciarCarro() {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Vaciar el carro no tiene vuelta atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#141e30',
      confirmButtonText: 'Si, vaciar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'vaciado!',
          'Su carrito fue vaciado con exito.',
          'success',
          deleteCart()
        )
      }
    })
  }
  return (
    <div>
      <div className='cart-content'>
        {
          cart.length > 0 ?
            cart.map((producto, indice) => {
              let toPay = (producto.price * producto.cantidad);

              return (
                <div key={indice} className='lista-productos-cart'>
                  <img className='img-producto-cart' src={producto.img} alt="" />
                  <div className="book-content"><h5 className='titulo'>"{producto.titulo}"</h5>
                    <p className='cantidad' >Cantidad: {producto.cantidad}</p>
                    <p className='precio' >A pagar de este producto:  <span className='fs-5 fw-bold'>${toPay}</span> </p>
                    <button className='btn-eliminar' onClick={() => eliminar(indice)}> Elliminar </button>
                  </div>
                </div>
              );
            }) : <div className='msg-empty'> Carrito vacio <Link to='/'>compra aqui</Link></div>
        }
      </div>
      {
        cart.length > 0 ?
          <div>
            <h1 className='total-a-pagar'>total: ${toPay()}</h1>
            <button className='btn btn-danger mt-5' onClick={vaciarCarro}>Vaciar carrito</button>
            <UserForm />
          </div> : ''
      }
    </div >
  )
}

export default Cart