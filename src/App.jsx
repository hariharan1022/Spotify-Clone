import { useEffect, useState, useContext } from 'react'
import Home from './components/Home'
import Opening from './components/Opening'
import { PlayerContext } from './context/PlayerContext'

function App() {

  const { audioRef, track } = useContext(PlayerContext);

  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 4000)

    return () => clearTimeout(timer);
  }, [])


  return (
    <>
      {isSplashVisible ? <Opening /> : <Home />}
      <audio ref={audioRef} src={track ? track.file : ""} preload='auto'></audio>
    </>
  )
}

export default App