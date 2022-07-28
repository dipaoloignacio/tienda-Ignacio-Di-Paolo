import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStore} from '@fortawesome/free-solid-svg-icons'
function CartWidget() {
  return (
    <div className='icon-market'>
        <FontAwesomeIcon icon={faStore}/>
    </div>
  )
}

export default CartWidget;