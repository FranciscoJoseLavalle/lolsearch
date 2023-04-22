import axios from 'axios'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css'
import ActualGame from './components/ActualGame/ActualGame';
import Footer from './components/Footer/Footer';
import FreeChamps from './components/FreeChamps/FreeChamps';
import Header from './components/Header/Header';
import History from './components/History/History';
import Loader from './components/Loader/Loader';
import User from './components/User/User';
import UserContainer from './components/UserContainer/UserContainer';

function App() {


  // if (!user?.name) {
  //   return (
  //     <>
  //       <Header api_key={api_key} api_url={api_url} setUser={setUser} findMatches={findMatches} setSecondLoading={setSecondLoading} setLoading={setLoading} findActualGame={findActualGame} />
  //       <main>
  //         <FreeChamps api_key={api_key} />
  //         {secondLoading ? <Loader /> : user.error ? <p style={{
  //           textAlign: "center"
  //         }}>{user.error}</p> : <p style={{
  //           textAlign: "center"
  //         }}>Aún no has buscado a ningún invocador...</p>}
  //       </main>
  //       <Footer />
  //     </>
  //   )
  // }
  return (
    <BrowserRouter>
      <Header />
      <FreeChamps />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='user/:userName' element={<UserContainer />} />
        <Route path='user/:userName/:live' element={<UserContainer />} />

        <Route path='/*' element={<Navigate to='/' replace />} />

      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default App
