import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ModalContextProvider from './context/ModalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>
)
