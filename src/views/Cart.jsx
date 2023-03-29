import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyContext from '../MyContext';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Cart() {
    const { show, setShow, handleClose, handleShow, cart, setCart, total, setTotal, quantityTotal, setQuantityTotal } = useContext(MyContext)

    const capitalizeWord = (word) => {
        const firstLetter = word.charAt(0)
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = word.slice(1)
        const capitalizedWord = firstLetterCap + remainingLetters
        return capitalizedWord
    }

    const priceCorrection = (num) => {
        let correctedPrice = num.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
        return correctedPrice
    }

    const totalQuantity = () => {
        let totalFunc = 0;
        let quantityTotalFunc = 0;

        cart.forEach((item) => {
            totalFunc += item.price * item.count
            quantityTotalFunc += item.count
        })
        setTotal(totalFunc)
        setQuantityTotal(quantityTotalFunc)
    }

    const addItemToCart = (itemId) => {
        let findItem = cart.find((item) => item.id === itemId)

        if (findItem) {
            findItem.count += 1
            setCart([...cart])
        } else {
            findItem = pizzasData.find((item) => item.id === itemId)
            findItem.count = 1
            setCart([...cart, findItem])
        }
    }

    const removeItemFromCart = (itemId) => {
        let findItem = cart.find((item) => item.id === itemId);
    
        if (findItem.count === 1) {
          setCart(cart.filter((item) => item.id !== itemId));
        } else {
          findItem.count -= 1;
          setCart([...cart]);
        }
      };

    useEffect(() => {
        totalQuantity()
    }, [cart])

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del pedido:</Modal.Title>
                </Modal.Header>
                <Modal.Body className='h-100'>
                    <Container className='h-100'>
                        <div className='border p-2 shadow d-flex flex-column align-items-left gap-2 h-100'>
                            {cart.map((item) => {
                                return (
                                    <div className='border p-2 shadow d-flex justify-content-between align-items-center h-100'>
                                        <div className='d-flex align-items-center'>
                                            <div className='img-papa'>
                                                <Image className='img-fluid img-cart' src={item.img} />
                                            </div>
                                            <div className='cart-text'>
                                                <p className='ms-1 p-0 fw-semibold'>{capitalizeWord(item.name)}</p>
                                            </div>
                                        </div>
                                        <div className='ms-auto d-flex flex-grow-1'>
                                            <div>
                                                <div className='d-flex align-items-center'>
                                                    <Button onClick={() => removeItemFromCart(item.id)} size='sm' variant='danger'>-</Button> <span className='px-1'>{item.count}</span> <Button onClick={() => addItemToCart(item.id)} size='sm'>+</Button>
                                                </div>
                                            </div>
                                            <div className='ms-3 div-papito'>
                                                <div className='div-hijito pt-1'>
                                                    <span className='fw-semibold text-success m-0 p-0 price-text'>{priceCorrection(item.price * item.count)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <p className='me-auto fw-semibold total-pay'>Total a pagar: <span className='text-success'>{priceCorrection(total)}</span></p>
                    <Button size='sm' variant="secondary" onClick={() => setCart([])}>
                        Vaciar Carro
                    </Button>
                    <Button size='sm' variant="primary">
                        Ir a Pagar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cart