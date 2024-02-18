import './App.css'
import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Contato from './components/Contato'

function App() {
  

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='/' element={<Home />}/>
            <Route path='/sobre' element={<Sobre />}/>
            <Route path='/contato' element={<Contato />}/>
          </Route>
          <Route path='*' element={<h2>ERROR</h2>}></Route>
        </Routes>
    </div>
  )
}

export default App
