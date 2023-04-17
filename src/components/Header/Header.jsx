import './Header.css'

const Header = ({ searchUser, setUserName }) => {
    return (
        <header>
            <form onSubmit={searchUser}>
                <input type="text" onChange={(e) => setUserName(e.target.value)} />
                <button>Buscar</button>
            </form>
        </header>
    )
}

export default Header