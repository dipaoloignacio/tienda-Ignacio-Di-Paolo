import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ItemListContainer from '../itemListContainer/ItemListContainer';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function ItemCount({producto}) {

    const [countItems, setCountItems] = useState(producto.onAdd);

    console.log(producto.onAdd);
    const calcularItems = () => {
        producto.stock=producto.stock-countItems;
        setCountItems(0);
    }
    return (
        <div className='container-count-items'>
            <ul className='count-items'>
                <li>
                    <button onClick={() =>countItems < producto.stock? setCountItems(countItems + 1): setCountItems(producto.stock)}><FontAwesomeIcon icon={faPlus} /></button>
                </li>
                <li>
                    <div>{countItems}</div>
                </li>
                <li>
                    <button onClick={() => countItems > 0 ? setCountItems(countItems - 1) : setCountItems(0)}><FontAwesomeIcon icon={faMinus} /> </button>
                </li>
            </ul>
            <button className='btn-agr' onClick={calcularItems}>Agregar al carro</button>

        </div>
    )
}

export default ItemCount