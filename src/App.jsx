import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import MyContext from './MyContext'
import NavbarMain from './components/NavbarMain'
import Home from './views/Home'
import HomePizzas from './views/HomePizzas'
import PizzaSeeMore from './views/PizzaSeeMore'
import Footer from './components/Footer'
import Cart from './views/Cart'

function App() {
  const [pizzasData, setPizzasData] = useState([])
  const [pizzaSelected, setPizzaSelected] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [quantityTotal, setQuantityTotal] = useState(0)

  const globalContext = { pizzasData, pizzaSelected, setPizzaSelected, show, setShow, handleClose, handleShow, cart, setCart, total, setTotal, quantityTotal, setQuantityTotal }

  const getData = async () => {
    try {
      const req = await fetch("https://raw.githubusercontent.com/Nandem1/desafio-4-mammamia/main/src/pizzas.json")
      const res = await req.json()
      setPizzasData(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log(pizzasData)
  }, [])


  return (
    <div className="App">
      <MyContext.Provider value={globalContext}>
        <BrowserRouter>
          <NavbarMain />
          <Cart />
          <Home />
          <Routes>
            <Route path='/desafio-4-mammamia' element={<HomePizzas />} />
            <Route path='/:pizzaParams' element={pizzaSelected != "" ? <PizzaSeeMore /> : <Navigate to='/' />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
