import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[4]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: " --",
      minute: "-- ",
    },
    totalTime: {
      second: " --",
      minute: "-- ",
    },
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = ((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%"
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        })
      }
    }, 1000)
  }, [audioRef])

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  }
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  }

  const playWithId = async (id) => {
    await setTrack(songsData[id])
    await audioRef.current.play();
    setPlayStatus(true);
  }

  const before = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1])
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }
  const after = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1])
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const seekBgClick = (e) => {
    const rect = seekBg.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const progress = offsetX / rect.width;
    audioRef.current.currentTime = progress * audioRef.current.duration;
  }
  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    playStatus,
    time,
    setTrack,
    setPlayStatus,
    setTime,
    play,
    pause,
    playWithId,
    before,
    after,
    seekBgClick,
    searchQuery,
    setSearchQuery
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
