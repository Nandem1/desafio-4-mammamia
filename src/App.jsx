import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.css'
import MyContext from './MyContext'
import NavbarMain from './components/NavbarMain'
import Home from './views/Home'
import HomePizzas from './views/HomePizzas'

function App() {
  

  const globalContext = { }

  const getData = async () => {
    
  }


  return (
    <div className="App">
      <MyContext.Provider value={globalContext}>
        <BrowserRouter>
          <NavbarMain />
          <Home />
          <Routes>
            <Route path='/pizzas' element={<HomePizzas />}/>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
