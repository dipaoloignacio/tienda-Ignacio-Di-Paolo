import React from 'react'
import Item from '../item/Item';

function ItemList(props) {

  return (
    <div>
      {props.products.map((producto, i) => {
        return (
          <Item
            key={i}
            id={producto.id}
            resenia={producto.resenia}
            titulo={producto.titulo}
            price={producto.price}
            stock={producto.stock}
            img={producto.img}
          />
        )
      })}
    </div>
  );
};

export default ItemList