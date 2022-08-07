import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function ItemCount({ stock, calcStock }) {

    const [countItems, setCountItems] = useState(1);
    const agrCarro = () => {
        calcStock(countItems)
        setCountItems(1);
    }
    return (
        <div className='container-count-items'>
            <ul className='count-items'>
                <li>
                    <button onClick={() => countItems < stock ? setCountItems(countItems + 1) : setCountItems(stock)}><FontAwesomeIcon icon={faPlus} /></button>
                </li>
                <li>
                    <div>{countItems}</div>
                </li>
                <li>
                    <button onClick={() => countItems > 1 ? setCountItems(countItems - 1) : setCountItems(1)}><FontAwesomeIcon icon={faMinus} /> </button>
                </li>
            </ul>
            <button className='btn-agr' onClick={() => agrCarro()}>Agregar al carro</button>
        </div>
    )
}

export default ItemCount