import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css'
import FreeChamps from './components/FreeChamps/FreeChamps';
import Header from './components/Header/Header';
import History from './components/History/History';
import Loader from './components/Loader/Loader';
import User from './components/User/User';

function App() {
  const [user, setUser] = useState({});
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(false);
  const api_key = "RGAPI-3d0df508-be78-4dcc-8701-d3f8c9cd6270"
  const api_url = "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/"

  function findMatches(puuid, number = 10) {
    setHistory([]);
    axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${number}&api_key=${api_key}`)
      .then(res => {
        res.data.forEach(el => {
          findSingleMatch(el)
        })
      })
  }
  function findSingleMatch(matchID) {
    setLoading(false);
    axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${api_key}`)
      .then(res => {
        setHistory(el => [...el, res.data])
        setLoading(false);
        setSecondLoading(false);
      })
  }
  if (!user?.name) {
    return (
      <>
        <Header api_key={api_key} api_url={api_url} setUser={setUser} findMatches={findMatches} setSecondLoading={setSecondLoading} setLoading={setLoading} />
        <FreeChamps api_key={api_key} />
        {secondLoading ? <Loader /> : user.error ? <p style={{
          textAlign: "center"
        }}>{user.error}</p> : <p style={{
          textAlign: "center"
        }}>Aún no has buscado a ningún invocador...</p>}

      </>
    )
  }
  return (
    <div>
      <Header api_key={api_key} api_url={api_url} setUser={setUser} findMatches={findMatches} setSecondLoading={setSecondLoading} setLoading={setLoading} />
      <FreeChamps api_key={api_key} />
      <User user={user} api_key={api_key} />
      {loading ? <Loader /> : <History history={history} user={user} findMatches={findMatches} setLoading={setLoading} />}

    </div>
  )
}

export default App
