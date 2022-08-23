import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const cartContex = createContext([]);

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    const agregarAlCarro = (producto, cantidad) => {
        console.log(cart);
        let carrito = [...cart]
        let idInCart = false;

        cart.forEach(prod => {
            if (prod.id === producto.id) {
                prod.cantidad += cantidad;
                idInCart = true;
            }
        })

        if (idInCart === false) {
            carrito.push({ ...producto, cantidad: cantidad })
            setCart(carrito);
        }
    }

    return (
        <cartContex.Provider value={{ cart, agregarAlCarro }}>
            {children}
        </cartContex.Provider>
    )
}