import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Contato from './components/Contato'

function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/routerTest' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/routerTest/sobre' element={<Sobre />}/>
            <Route path='/routerTest/contato' element={<Contato />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
