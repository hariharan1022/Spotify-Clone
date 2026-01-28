import React, { useContext, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import Display from './Display'
import Login from './Login'
import { PlayerContext } from '../context/PlayerContext'

const Home = () => {
  const {audioRef, track} = useContext(PlayerContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem('user')
    if (user) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = (email) => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setIsLoggedIn(false)
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
            <Sidebar onLogout={handleLogout} />
            <Display/>
        </div>
        <Player/>
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default Home