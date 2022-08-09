import React from 'react'
import Item from '../item/Item';

function ItemList(props) {

  const calcularItems = (cantidad, id) => {
    props.products.map((p) => {
      if (p.id === id) {
        p.stock -= cantidad;
        if (p.stock < 0) {
          console.log('Lo sentimos el producto esta agotado.')
          p.stock = 0;
        } else {
          console.log("producto agregado.");
        }
      }
    })
  }

  return (
    <div className='content-p'>
      {props.products.map((producto, i) => {
        return (
          <Item
            key={i}
            id={producto.id}
            tipo={producto.tipo}
            price={producto.price}
            stock={producto.stock}
            img={producto.img}
            cant={calcularItems}
          />
        );
      })};
    </div>
  );
};

export default ItemList