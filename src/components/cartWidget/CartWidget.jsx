import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { cartContex } from '../../custom-context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { cart } = useContext(cartContex);
  let cantidad = 0;

  cart.forEach(producto => {
    cantidad += producto.cantidad
  });
  console.log(cantidad)

  return (
    <>
      <div className={`${cantidad === 0 ? 'd-none' : 'icon-market'}`}>
        <Link className='carrito' to='/cart'> <FontAwesomeIcon icon={faCartShopping} />
          {cantidad} Carrito</Link>
      </div>
    </>
  )
}

export default CartWidget;