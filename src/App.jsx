import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css'
import ActualGame from './components/ActualGame/ActualGame';
import Footer from './components/Footer/Footer';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [matchInfo, setMatchInfo] = useState({});
  const [watchHistory, setWatchHistory] = useState(true);
  const api_key = "RGAPI-a8723520-8603-4ca2-922b-4941d0dd0d79"
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
  function findActualGame(id) {
    setWatchHistory(true);
    setMatchInfo({});
    console.log(id);
    axios.get(`https://la2.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${api_key}`)
      .then(res => {
        console.log(res.data);
        setIsPlaying(true);
        setMatchInfo(res.data);
      })
      .catch(err => {
        console.log(err);
        setIsPlaying(false);
      })
  }
  if (!user?.name) {
    return (
      <>
        <Header api_key={api_key} api_url={api_url} setUser={setUser} findMatches={findMatches} setSecondLoading={setSecondLoading} setLoading={setLoading} findActualGame={findActualGame} />
        <main>
          <FreeChamps api_key={api_key} />
          {secondLoading ? <Loader /> : user.error ? <p style={{
            textAlign: "center"
          }}>{user.error}</p> : <p style={{
            textAlign: "center"
          }}>Aún no has buscado a ningún invocador...</p>}
        </main>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Header api_key={api_key} api_url={api_url} setUser={setUser} findMatches={findMatches} setSecondLoading={setSecondLoading} setLoading={setLoading} findActualGame={findActualGame} />
      <main>
        <FreeChamps api_key={api_key} />
        <User user={user} api_key={api_key} isPlaying={isPlaying} setWatchHistory={setWatchHistory} watchHistory={watchHistory} />
        {watchHistory
          ? <>{loading ? <Loader /> : <History history={history} user={user} findMatches={findMatches} setLoading={setLoading} />}</>
          : <ActualGame matchInfo={matchInfo} />
        }

      </main>
      <Footer />
    </>
  )
}

export default App
