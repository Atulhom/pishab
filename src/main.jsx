import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import Card from './features/Card.jsx'
import Header from './features/Header.jsx'
import Search from './features/Search.jsx'
import LatestRooms from './features/LatestRooms.jsx'
import Citycardold from './features/Citycardold.jsx'
import Questions from './features/Questions.jsx'
import TopRooms from './features/TopRooms.jsx'
import Footer from './features/Footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Search />
    <LatestRooms />
    <TopRooms />
    <Questions />
    <br />
    <Citycardold />
    <Footer />
  </React.StrictMode>,
)
