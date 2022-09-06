import React, { useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartContex } from '../../custom-context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import booksDB from '../../services/firestore';

function UserForm() {
    const { toPay, cart, deleteCart } = useContext(cartContex);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        telefono: ''
    });

    const buyOrder = {
        buyer: { ...userData },
        books: [...cart],
        toPay: toPay()
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const collectionRef = collection(booksDB, "order");
        const docref = await addDoc(collectionRef, buyOrder);
        deleteCart();
        navigate(`/purchase/${docref.id}`);
    }

    function inputChangeHandler(e) {
        const input = e.target;
        const value = input.value;
        const inputName = input.name;

        let copyUserData = { ...userData };

        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }

    return (
        <div>
            <div className="login-box">
                <h2>Terminar compra</h2>
                {/* El formulario no tiene validacion, se puede mandar vacio. Estoy en otro proyecto trabajando en eso con Formik :D */}
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <label htmlFor="name"></label>
                        <input
                            className='inputs'
                            value={userData.name}
                            onChange={inputChangeHandler}
                            name='name'
                            type="text"
                            placeholder='  nombre...'
                            required />
                    </div>
                    <div className="user-box">
                        <label htmlFor="telefono"></label>
                        <input
                            className='inputs'
                            value={userData.telefono}
                            onChange={inputChangeHandler}
                            name='telefono'
                            type="text"
                            placeholder='  telefono...'
                            required />
                    </div>
                    <div className="user-box">
                        <label htmlFor="email"></label>
                        <input
                            className='inputs'
                            value={userData.email}
                            onChange={inputChangeHandler}
                            name='email'
                            type="text"
                            placeholder='  email...'
                            required />
                    </div>
                    <button className='button' onClick={handleSubmit} type='submit' href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Comprar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserForm