import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import History from './components/History/History';

function App() {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState({});
  const [history, setHistory] = useState([]);
  const api_key = "RGAPI-ea8fd93f-e8f2-497f-9259-935b81e267cb"
  const api_url = "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
  const api_matches = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid//ids?start=0&count=20"

  function searchUser(e) {
    e.preventDefault();
    axios.get(`${api_url}${userName}?api_key=${api_key}`)
      .then(res => {
        console.log(res.data)
        setUser(res.data);
        findMatches(res.data.puuid);
        document.title = `${res.data.name}`;
      })
  }
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
    axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${api_key}`)
      .then(res => {
        console.log(res.data)
        setHistory(el => [...el, res.data])
      })
  }

  return (
    <div>
      <Header setUserName={setUserName} searchUser={searchUser} />
      {
        user?.name &&
        <div>
          <h3>{user.name}</h3>
          <img src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/${user.profileIconId}.png`} alt={`${user.name} icon`} width={100} height={100} />
          <p>Nivel de invocador: {user.summonerLevel}</p>

        </div>
      }
      <History history={history} userName={userName} />
    </div>
  )
}

export default App
