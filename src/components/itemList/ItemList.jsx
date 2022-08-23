import React from 'react'
import Item from '../item/Item';

function ItemList(props) {

  const calcularItems = (cantidad, id) => {
    props.products.map((producto) => {
      if (producto.id === id) {
        if (producto.stock < 0) {
          console.log('Lo sentimos el producto esta agotado.')
        } else {
          console.log("producto agregado.");
        }
      }
    });
  }

  return (
    <div className='content-p'>
      {props.products.map((producto, i) => {
        return (
          <Item
            key={i}
            id={producto.id}
            tipo={producto.name}
            precio={producto.precio}
            stock={producto.stock}
            img={producto.img}
            cant={calcularItems}
          />
        )
      })}
    </div>
  );
};

export default ItemList