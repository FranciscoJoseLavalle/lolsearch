import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer';
import FreeChamps from './components/FreeChamps/FreeChamps';
import Header from './components/Header/Header';
import UserContainer from './components/UserContainer/UserContainer';

function App() {
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
