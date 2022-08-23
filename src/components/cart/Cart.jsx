import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContex } from '../../custom-context/CartContext';

function Cart() {
  const { cart, deleteItem } = useContext(cartContex);
  let totalPagar = 0;

  function totalAPagar(precio) {
    totalPagar += precio;
  }

  function eliminar(indice) {
    deleteItem(indice);
  }

  return (
    <div className='cart-content'>
      {
        cart.length > 0 ?
          cart.map((producto, indice) => {
            totalAPagar(producto.precio);

            return (
              <div className='lista-productos-cart'>
                <div className='parte-superior-cart'>
                  <img className='img-producto-cart' src={producto.img} alt="" />
                </div>
                <div className='parte-inferior-cart'>
                  <h5 className='tipo-producto-cart'>"{producto.name}"</h5>
                  <h5><span>Made in: </span>{producto.madeIn}</h5>
                  <p className='cantidad-prod-agr' >Cantidad: {producto.cantidad}</p>
                  <p className='precio-prod-agr' >A pagar: $ <span className='fs-5'>{producto.precio}</span> </p>
                </div>
                <button className='btn-eliminar' onClick={() => eliminar(indice)}> Elliminar </button>
              </div>
            );
          }) : <div className='msg-empty'>Carrito vacio <Link to='/'>compra aqui</Link></div>
      }
    </div>
  )
}

export default Cart