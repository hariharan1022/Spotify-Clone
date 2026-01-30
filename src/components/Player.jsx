import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { seekBar, seekBg, play, pause, playStatus, track, time, after, before, seekBgClick } =
    useContext(PlayerContext) || {};
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 border-t border-white/10">
      {/* Current Track */}
      <div className="hidden lg:flex items-center gap-4 w-[30%]">
        <img className="w-14 h-14 rounded-md" src={track ? track.image : ""} alt={track ? track.name : ""} />
        <div className="flex-1">
          <p className="font-bold text-sm text-white truncate">{track ? track.name : ""}</p>
          <p className="text-xs text-gray-400 truncate">{track ? track.desc : ""}</p>
        </div>
        <img className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100" src={assets.like_icon} alt="Like" />
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-2 m-auto flex-1 max-w-[600px]">
        <div className="flex gap-4 items-center">
          <img
            className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
            src={assets.shuffle_icon}
            alt="Shuffle"
          />
          <img onClick={before} className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition" src={assets.prev_icon} alt="Previous" />
          {playStatus ? (
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform" onClick={pause}>
              <img
                className="w-4 h-4 text-black"
                src={assets.pause_icon}
                alt="Pause"
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform" onClick={play}>
              <img
                className="w-4 h-4 text-black"
                src={assets.play_icon}
                alt="Play"
              />
            </div>
          )}

          <img onClick={after} className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition" src={assets.next_icon} alt="Next" />
          <img className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition" src={assets.loop_icon} alt="Loop" />
        </div>
        <div className="flex items-center gap-3 w-full">
          <p className="text-xs text-gray-400">{time ? time.currentTime.minute : 0}:{time ? String(time.currentTime.second).padStart(2, '0') : '00'}</p>
          <div
            ref={seekBg} onClick={seekBgClick}
            className="flex-1 bg-gray-600 rounded-full cursor-pointer h-1 group"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-white rounded-full group-hover:bg-green-500"
            />
          </div>
          <p className="text-xs text-gray-400">{time ? time.totalTime.minute : 0}:{time ? String(time.totalTime.second).padStart(2, '0') : '00'}</p>
        </div>
      </div>

      {/* Volume and Other Controls */}
      <div className="hidden lg:flex items-center gap-4 w-[30%] justify-end opacity-70">
        <img className="w-5 h-5 cursor-pointer hover:opacity-100" src={assets.queue_icon} alt="Queue" />
        <img className="w-5 h-5 cursor-pointer hover:opacity-100" src={assets.speaker_icon} alt="Devices" />
        <div className="flex items-center gap-2">
          <img className="w-5 h-5 cursor-pointer hover:opacity-100" src={assets.volume_icon} alt="Volume" />
          <div className="w-24 bg-gray-600 h-1 rounded-full cursor-pointer group">
            <div className="h-1 w-1/2 bg-white rounded-full group-hover:bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
