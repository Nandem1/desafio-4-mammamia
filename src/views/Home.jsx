import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'

function Home() {
    return (
        <>
        <div className='main text-light w-100 opacity-100'>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col className='d-flex flex-column justify-content-center align-items-left'>
                        <div className='border border-4 p-5 text-head'>
                            <h1 className='mb-5 fs-1'>¡Pizzería Mamma Mia!</h1>
                            <h4 className='fs-5'>Que estas esperando para probar nuestras delicias, ¡visita nuestro catalogo a continuación!</h4>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Home