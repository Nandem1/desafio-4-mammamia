import { React, useState, useEffect, useContext } from 'react'
import MyContext from '../MyContext'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './HomePizzas.css'

function HomePizzas() {
    const { pizzasData } = useContext(MyContext)

    useEffect(() => {
        console.log(pizzasData)
    }, [])

    const capitalizeWord = (word) => {
        const firstLetter = word.charAt(0)
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = word.slice(1)
        const capitalizedWord = firstLetterCap + remainingLetters
        return capitalizedWord
    }

    const priceCorrection = (num) => {
        let correctedPrice = num.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
        return correctedPrice
    }

    return (
        <div className='bg-light h-100'>
            <Container className='h-100'>
                <h1 className='text-center h-100 text-danger my-4'>Pizzas Disponibles</h1>
                <Row lg={3} md={3} sm={1} xs={1}>
                    {pizzasData.map((item) => {
                        return (
                            <Col className='m-auto my-3'>
                                <Card>
                                    <div className='overflow-hidden'>
                                        <Card.Img className='img-hover' variant="top" src={item.img} />
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            <h4>{capitalizeWord(item.name)}</h4>
                                            <hr></hr>
                                            <h6>Ingredientes:</h6>
                                            <div>
                                                {item.ingredients.map((i) => {
                                                    return <p className='p-0 ms-3 my-1'>{capitalizeWord(i)}</p>
                                                })}
                                            </div>
                                            <hr></hr>
                                            <h4 className='text-center'>{priceCorrection(item.price)}</h4>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <Button variant='info' className='mx-2 mt-2'>Ver mas</Button>
                                                <Button variant='danger' className='mx-2 mt-2'>Añadir</Button>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default HomePizzas