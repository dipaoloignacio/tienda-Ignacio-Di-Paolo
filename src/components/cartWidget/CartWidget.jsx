import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { cartContex } from '../../custom-context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { cart,toPay } = useContext(cartContex);

  let cantidad = 0;
  let totalPagar = 0;

  cart.forEach(producto => {
    cantidad += producto.cantidad
    totalPagar += (producto.price * producto.cantidad)
  });

  return (
    <>
      <div className={`${cantidad === 0 ? 'null' : 'icon-market'}`}>
        <FontAwesomeIcon icon={faCartShopping} />
        {cantidad}
        <Link className='carrito' to='/cart'> Carrito</Link>
      </div>
    </>
  )
}

export default CartWidget;