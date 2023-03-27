import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyContext from '../MyContext';
import { Container, Row, Col } from 'react-bootstrap';

function Cart() {
    const { show, setShow, handleClose, handleShow } = useContext(MyContext)

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del pedido:</Modal.Title>
                </Modal.Header>
                <Modal.Body className='h-100'>
                    <Container className='h-100'>
                        <div className='border p-2 shadow d-flex align-items-center h-100'>
                            <p className='p-0 m-0'>Pizza de 1 peso</p>
                        </div>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Limpiar Carro
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Ir a Pagar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cart