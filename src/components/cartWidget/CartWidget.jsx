import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { cartContex } from '../../custom-context/CartContext';
import { useContext } from 'react';

function CartWidget() {
  const { cart } = useContext(cartContex);

  let cantidad = 0;
  let totalPagar = 0;

  cart.forEach(producto => {
    cantidad += producto.cantidad
    totalPagar += producto.precio
  });

  return (
    <>
      <div className={`${cantidad === 0 ? 'null' : 'icon-market'}`}>
        <FontAwesomeIcon icon={faCartShopping} />
        {cantidad} &nbsp; Total: ${totalPagar}
      </div>
    </>
  )
}

export default CartWidget;