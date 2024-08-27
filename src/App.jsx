import './App.css'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import Sobre from './pages/Sobre.jsx'
import Nav from './Nav.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <main>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/sobre' element={<Sobre/>}/>
          <Route exact path='/contato' element={<Contato/>}/> 
        </Routes>
      </main>
    </Router>
  )
}