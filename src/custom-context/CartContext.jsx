import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const cartContex = createContext([]);

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(0);

    const agregarAlCarro = (producto, cantidad) => {
        let carrito = [...cart]
        let idInCart = false;
        let actualizarCantidad = 0;

        cart.forEach(prod => {
            if (prod.id === producto.id) {
                prod.cantidad += cantidad;
                idInCart = true;
            }
            actualizarCantidad += prod.cantidad;
        })

        setCantidad(actualizarCantidad);

        if (idInCart === false) {
            carrito.push({ ...producto, cantidad: cantidad })
            setCart(carrito);
        }
    }

    const deleteItem = (indice) => {
        let carrito = [...cart]
        carrito.splice(indice, 1);
        setCart(carrito);
    }

    function deleteCart() {
        let carrito = [...cart]
        carrito.splice(0, carrito.length);
        setCart(carrito);
    }

    function toPay() {
        let totalToPay = 0;
        cart.forEach(book => {
            totalToPay += (book.price * book.cantidad)
        })
        return totalToPay;
    }

    return (
        <cartContex.Provider value={{ cart, agregarAlCarro, deleteItem, deleteCart, toPay }}>
            {children}
        </cartContex.Provider>
    )
}