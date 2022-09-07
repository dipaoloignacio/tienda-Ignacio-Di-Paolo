import React, { useContext } from 'react'
import { cartContex } from '../../custom-context/CartContext'
import { useNavigate } from 'react-router-dom';
//firestore
import { collection, addDoc } from 'firebase/firestore'
import booksDB from '../../services/firestore';
//Formik
import { Formik, Form, Field, ErrorMessage } from 'formik'

function UserForm() {
    const { toPay, cart, deleteCart } = useContext(cartContex);
    const navigate = useNavigate();

    async function handleSubmit(values) {

        const buyOrder = {
            buyer: { ...values },
            books: [...cart],
            toPay: toPay()
        }

        const collectionRef = collection(booksDB, "order");
        const docref = await addDoc(collectionRef, buyOrder);
        deleteCart();
        navigate(`/purchase/${docref.id}`);
    }

    return (
        <div>
            <div className="login-box">
                <h2>Terminar compra</h2>

                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        telefono: '',
                        emailRepetido: ''
                    }}
                    validate={(values) => {
                        let errores = {}
                        if (!values.name) {
                            errores.name = 'el nombre no puede estar vacio'
                        }
                        if (!values.telefono) {
                            errores.telefono = 'ingresa un telefono'
                        }
                        if (!values.email) {
                            errores.email = 'ingresa un correo'
                        }
                        if (values.emailRepetido !== values.email) {
                            errores.telefono = 'los emails no concuerdan'
                        }
                        return errores;
                    }}

                    onSubmit={(values) => {

                        const valuesBuyer = {
                            name: values.name,
                            email: values.email,
                            telefono: values.telefono,
                        }

                        handleSubmit(valuesBuyer);
                    }}
                >
                    {
                        ({ errors }) => (
                            <Form >
                                <div className="user-box">
                                    <Field
                                        className='inputs'
                                        name='name'
                                        type="text"
                                        placeholder='  nombre...'
                                        required />
                                    <ErrorMessage name='name' component={() => (
                                        <div style={{ color: '#03e9f4' }}>{errors.name}</div>
                                    )} />
                                </div>
                                <div className="user-box">
                                    <Field
                                        className='inputs'
                                        name='telefono'
                                        type="text"
                                        placeholder='  telefono...'
                                    />
                                    <ErrorMessage name='telefono' component={() => (
                                        <div style={{ color: '#03e9f4' }}>{errors.telefono}</div>
                                    )} />
                                </div>
                                <div className="user-box">
                                    <Field
                                        className='inputs'
                                        name='email'
                                        type="text"
                                        placeholder='  email...'
                                    />
                                    <ErrorMessage name='email' component={() => (
                                        <div style={{ color: '#03e9f4' }}>{errors.email}</div>
                                    )} />
                                </div>
                                <div className="user-box">
                                    <Field
                                        className='inputs'
                                        name='emailRepetido'
                                        type="text"
                                        placeholder=' repetir  email...'
                                    />
                                    <ErrorMessage name='emailRepetido' component={() => (
                                        <div style={{ color: '#03e9f4' }}>{errors.emailRepetido}</div>
                                    )} />
                                </div>
                                <button className='button' value="Send" type='input' href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Comprar
                                </button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default UserForm