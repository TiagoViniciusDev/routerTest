import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='Header'>
        <h2>HEADER</h2>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
        </nav>
    </div>
  )
}

export default Header