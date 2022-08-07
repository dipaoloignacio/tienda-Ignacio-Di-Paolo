import React from 'react'
import Item from '../item/Item';

function ItemList(props) {
  return (
    <div className='content-p'>
      {props.products.map((producto, i) => {

        const calcularItems = (cantidad) => {
          producto.stock -= cantidad;
          console.log("accion realizada"+producto.stock);
        }
        return (
          <Item
            key={i}
            id={producto.id}
            tipo={producto.tipo}
            price={producto.price}
            stock={producto.stock}
            cant={calcularItems}
          />
        );
      })};
    </div>
  );
};

export default ItemList