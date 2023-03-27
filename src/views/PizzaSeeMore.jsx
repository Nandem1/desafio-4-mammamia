import { React, useContext } from 'react'
import { useParams } from 'react-router-dom'
import MyContext from '../MyContext'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

function PizzaSeeMore() {
    const { pizzaParams } = useParams()
    const { pizzasData, setPizzaSelected, pizzaSelected } = useContext(MyContext)

    console.log("Parametros: ", pizzaParams)

    const pizzaClicked = pizzasData.find((p) => p.name == pizzaParams)

    console.log(pizzaClicked)

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

    return (
        <div>
            <Container className='my-5 p-5'>
                <Row lg={2} md={2} sm={1} xs={1} className='border shadow'>
                    <Col className='px-0'>
                        <Image className='h-100 w-100' src={pizzaClicked.img} />
                    </Col>
                    <Col className='ps-3'>
                        <h2 className='mt-3'>{capitalizeWord(pizzaClicked.name)}</h2>
                        <hr />
                        <p>{capitalizeWord(pizzaClicked.desc)}</p>
                        <p className='fw-bold'>Ingredientes:</p>
                        <div>
                            {pizzaClicked.ingredients.map((i) => {
                                return <p className='p-0 ms-3 my-1'>{capitalizeWord(i)}</p>
                            })}
                        </div>
                        <div className='d-flex justify-content-between mt-2'>
                            <div>
                                <p className='fw-semibold fs-1'>{priceCorrection(pizzaClicked.price)}</p>
                            </div>
                            <div>
                                <Button variant='danger' className='mx-2 mt-2'>Añadir</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PizzaSeeMore