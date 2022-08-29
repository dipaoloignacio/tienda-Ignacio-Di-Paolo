import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContex } from '../../custom-context/CartContext';
import Swal from 'sweetalert2';

function Cart() {
  const { cart, deleteItem, deleteCart } = useContext(cartContex);
  let totalPagar = 0;
  let aux = false

  function eliminar(indice) {
    deleteItem(indice);
  }

  function totalToPay(price) {
    totalPagar += price
  }

  function vaciarCarro() {

    Swal.fire({
      title: 'Estas seguro?',
      text: "Vaciar el carro no tiene vuelta atras!",
      icon: 'cuidado',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, vaciar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'vaciado!',
          'Su carrito fue vaciado con exito.',
          'exitoso',
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
              let toPay = (producto.precio * producto.cantidad);
              totalToPay(toPay);

              return (
                <div className='lista-productos-cart'>
                  <div className='parte-superior-cart'>
                    <img className='img-producto-cart' src={producto.img} alt="" />
                  </div>
                  <div className='parte-inferior-cart'>
                    <h5 className='tipo-producto-cart'>"{producto.name}"</h5>
                    <h5><span>Made in: </span>{producto.madeIn}</h5>
                    <p className='cantidad-prod-agr' >Cantidad: {producto.cantidad}</p>
                    <p className='precio-prod-agr' >A pagar: $ <span className='fs-5'>{toPay}</span> </p>
                  </div>
                  <button className='btn-eliminar' onClick={() => eliminar(indice)}> Elliminar </button>
                </div>
              );
            }) : <div className='msg-empty'>Carrito vacio <Link to='/'>compra aqui</Link></div>
        }
      </div>
      <h1 className={cart.length > 0 ? 'total-a-pagar' : 'desactivado'}>Total a pagar: ${totalPagar}</h1>
      <button className={cart.length > 0 ? 'btn btn-danger mt-5' : 'desactivado'} onClick={vaciarCarro}>Vaciar carrito</button>
    </div>
  )
}

export default Cart