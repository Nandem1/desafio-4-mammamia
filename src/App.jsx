import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MyContext from './MyContext'
import NavbarMain from './components/NavbarMain'
import Home from './views/Home'
import HomePizzas from './views/HomePizzas'

function App() {
  const [pizzasData, setPizzasData] = useState([])


  const globalContext = { pizzasData }

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
          <Home />
          <Routes>
            <Route path='/pizzas' element={<HomePizzas />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
