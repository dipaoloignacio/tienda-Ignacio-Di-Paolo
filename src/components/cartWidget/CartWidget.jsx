import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
  
  return (
    <div className='icon-market'>
        <FontAwesomeIcon icon={faCartShopping}/>
    </div>
  )
}

export default CartWidget;