import axios from 'axios';
import { useState } from 'react';
import './Header.css'

const Header = ({ api_key, api_url, setUser, findMatches, setSecondLoading, setLoading, findActualGame }) => {
    const [userName, setUserName] = useState('');
    function searchUser(e) {
        e.preventDefault();
        setSecondLoading(true);
        axios.get(`${api_url}${userName}?api_key=${api_key}`)
            .then(res => {
                setUser(res.data);
                findMatches(res.data.puuid);
                findActualGame(res.data.id);
                document.title = `${res.data.name} | LoLSearcher`;
            })
            .catch(err => {
                setUser({ error: "Usuario no encontrado" })
                setLoading(false);
                setSecondLoading(false);
            })
    }
    return (
        <header className='header'>
            <h1>LoL<span>Searcher</span></h1>
            <nav className="header__nav">
                <form onSubmit={searchUser} className="header__nav-form">
                    <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Nombre de invocador" />
                    <button>Buscar</button>
                </form>
            </nav>
        </header>
    )
}

export default Header