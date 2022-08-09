import React from 'react'

function ItemDetail({ prod }) {
  console.log(prod)
  return (
    <div>
      <div className='producto-detail'>
        <img src={prod.img} alt="" />
        <h4>{prod.tipo}</h4>
        <p>disponibilidad: {prod.stock} u.</p>
        <p>precio: $ ${prod.price}</p>
      </div>
    </div>
  )
}

export default ItemDetail