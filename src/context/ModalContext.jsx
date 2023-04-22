import axios from 'axios';
import { createContext, useState } from 'react';

export const ModalContext = createContext([])

function ModalContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [history, setHistory] = useState([]);
  const [matchInfo, setMatchInfo] = useState({});
  const [watchHistory, setWatchHistory] = useState(true);

  const api_key = "RGAPI-00265329-a7e2-454b-8b7d-e97c52d994a6"

  function searchPlayer(userName) {
    axios.get(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${api_key}`)
      .then(res => {
        setUser(res.data);
        findMatches(res.data.puuid);
        findActualGame(res.data.id);
        document.title = `${res.data.name} | LoLSearcher`;
      })
      .catch(err => {
        setUser({ error: "Usuario no encontrado" })
      })
  }

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
    axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${api_key}`)
      .then(res => {
        setHistory(el => [...el, res.data])
      })
  }
  function findActualGame(id) {
    setWatchHistory(true);
    setMatchInfo({});
    axios.get(`https://la2.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${api_key}`)
      .then(res => {
        setIsPlaying(true);
        setMatchInfo(res.data);
      })
      .catch(err => {
        setIsPlaying(false);
      })
  }

  return (
    <ModalContext.Provider value={{ user, setUser, api_key, findMatches, findActualGame, isPlaying, history, matchInfo, watchHistory, setWatchHistory, searchPlayer }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider;