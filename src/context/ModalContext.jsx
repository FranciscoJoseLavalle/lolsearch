import axios from 'axios';
import { createContext, useState } from 'react';

export const ModalContext = createContext([])

function ModalContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [history, setHistory] = useState([]);
  const [bestChamps, setBestChamps] = useState([]);
  const [matchInfo, setMatchInfo] = useState({});
  const [watchHistory, setWatchHistory] = useState(true);
  const [loading, setLoading] = useState(true);
  const [historyLoading, setHistoryLoading] = useState(true);

  const api_key = "RGAPI-6652303b-4514-4d09-a341-ce6534e71fa0"

  function searchPlayer(userName) {
    axios.get(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${api_key}`)
      .then(res => {
        setUser(res.data);
        findMatches(res.data.puuid);
        findActualGame(res.data.id);
        findBestChamps(res.data.id);
        setHistoryLoading(true);
        // findClashGame(res.data.id);
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
        setHistoryLoading(false);
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
  function findBestChamps(id) {
    axios.get(`https://la2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}/top?count=3&api_key=${api_key}`)
      .then(res => {
        setBestChamps(res.data);
      })
  }
  // function findClashGame(id) {
  //   setWatchHistory(true);
  //   setMatchInfo({});
  //   axios.get(`https://la2.api.riotgames.com/lol/clash/v1/players/by-summoner/${id}?api_key=${api_key}`)
  //     .then(res => {
  //       console.log(res.data);
  //       setIsPlaying(true);
  //       setMatchInfo(res.data);
  //     })
  //     .catch(err => {
  //       setIsPlaying(false);
  //     })
  // }

  return (
    <ModalContext.Provider value={{ user, setUser, api_key, findMatches, findActualGame, isPlaying, history, matchInfo, watchHistory, setWatchHistory, searchPlayer, bestChamps, loading, setLoading, historyLoading }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider;