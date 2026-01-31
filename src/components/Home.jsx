import React, { useContext, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import Display from './Display'
import Login from './Login'
import BottomNav from './BottomNav'


const Home = () => {
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
    <div className='h-[100dvh] bg-black flex flex-col'>
      <div className='flex-1 flex overflow-hidden'>
        <Sidebar onLogout={handleLogout} />
        <Display />
      </div>
      <Player />
      <BottomNav />
    </div>
  )
}

export default Home
