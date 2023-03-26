import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.css'
import MyContext from './MyContext'
import NavbarMain from './components/NavbarMain'
import Home from './views/Home'

function App() {
  

  const globalContext = { }


  return (
    <div className="App">
      <MyContext.Provider value={globalContext}>
        <BrowserRouter>
          <NavbarMain />
          <Home />
          <Routes>
            
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
