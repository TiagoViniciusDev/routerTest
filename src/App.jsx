import './App.css'
import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Contato from './components/Contato'

function App() {
  

  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/sobre' element={<Sobre />}/>
            <Route path='/contato' element={<Contato />}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
