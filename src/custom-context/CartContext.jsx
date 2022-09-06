import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const cartContex = createContext([]);

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    const agregarAlCarro = (producto, cantidad) => {
        let carrito = [...cart]
        let idInCart = false;

        carrito.forEach(prod => {
            if (prod.id === producto.id) {
                prod.cantidad += cantidad;
                idInCart = true;
            }

        })

        if (idInCart === false) {
            carrito.push({ ...producto, cantidad: cantidad })
            setCart(carrito);
        } else {
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