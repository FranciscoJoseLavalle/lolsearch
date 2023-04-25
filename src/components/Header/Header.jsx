import axios from 'axios';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { ModalContext } from '../../context/ModalContext';
import './Header.css'

const Header = () => {
    const [userName, setUserName] = useState('');
    return (
        <header className='header'>
            <Link to='/'>
                <h1>LoL<span>Searcher</span></h1>
            </Link>
            <nav className="header__nav">
                <form className="header__nav-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Nombre de invocador" />
                    <button><Link to={`/user/${userName}`}>Buscar</Link></button>
                </form>
            </nav>
        </header>
    )
}

export default Header