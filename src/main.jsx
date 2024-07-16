import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Citycard from './features/Citycard.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Citycard />
  </React.StrictMode>,
)
