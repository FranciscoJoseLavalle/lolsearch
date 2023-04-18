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
  const api_key = "RGAPI-6c675f8e-d783-4cb0-a82c-ca0a26fb89b7"
  const api_url = "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
  const api_matches = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid//ids?start=0&count=20"

  function findMatches(puuid) {
    setHistory([]);
    axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${api_key}`)
      .then(res => {
        console.log(res.data)
        res.data.forEach(el => {
          findSingleMatch(el)
        })
      })
  }
  function findSingleMatch(matchID) {
    setLoading(false);
    axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${api_key}`)
      .then(res => {
        console.log(res.data)
        setHistory(el => [...el, res.data])
        setLoading(false);
        setSecondLoading(false);
      })
  }
  if (!user?.name) {
    return (
      <>
        <Header api_key={api_key} api_url={api_url} setUser={setUser} findMatches={findMatches} setSecondLoading={setSecondLoading} />
        <FreeChamps api_key={api_key} />
        {secondLoading ? <Loader /> : <p>Aún no has buscado a ningún invocador...</p>}

      </>
    )
  }
  return (
    <div>
      <Header api_key={api_key} api_url={api_url} setUser={setUser} findMatches={findMatches} setSecondLoading={setSecondLoading} />
      <FreeChamps api_key={api_key} />
      <User user={user} api_key={api_key} />
      {loading ? <Loader /> : <History history={history} user={user} />}

    </div>
  )
}

export default App
