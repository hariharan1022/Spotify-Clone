import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { seekBar, seekBg, play, pause, playStatus, track, time, after, before, seekBgClick } =
    useContext(PlayerContext) || {};

  return (
    <div className="h-[80px] md:h-[12%] bg-black flex justify-between items-center text-white px-3 md:px-5 border-t border-white/10 z-20">
      {/* Current Track */}
      <div className="flex items-center gap-3 w-[40%] md:w-[30%]">
        <img className="w-10 h-10 md:w-14 md:h-14 rounded-md shadow-md" src={track ? track.image : ""} alt="" />
        <div className="min-w-0">
          <p className="font-bold text-[12px] md:text-sm text-white truncate">{track ? track.name : "No song selected"}</p>
          <p className="text-[10px] md:text-xs text-[#a7a7a7] truncate">{track ? track.desc : ""}</p>
        </div>
        <img className="w-4 h-4 md:w-5 md:h-5 cursor-pointer opacity-70 hover:opacity-100 hidden sm:block ml-2" src={assets.like_icon} alt="Like" />
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-1 flex-1 max-w-full md:max-w-[40%] px-2">
        <div className="flex gap-4 md:gap-6 items-center">
          <img
            className="w-4 h-4 cursor-pointer opacity-60 hover:opacity-100 transition hidden sm:block"
            src={assets.shuffle_icon}
            alt="Shuffle"
          />
          <img onClick={before} className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100 transition" src={assets.prev_icon} alt="Previous" />

          {playStatus ? (
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform" onClick={pause}>
              <img
                className="w-3.5 h-3.5 md:w-4 md:h-4 text-black"
                src={assets.pause_icon}
                alt="Pause"
                style={{ filter: "brightness(0)" }}
              />
            </div>
          ) : (
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform" onClick={play}>
              <img
                className="w-3.5 h-3.5 md:w-4 md:h-4 text-black ml-0.5"
                src={assets.play_icon}
                alt="Play"
                style={{ filter: "brightness(0)" }}
              />
            </div>
          )}

          <img onClick={after} className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100 transition" src={assets.next_icon} alt="Next" />
          <img className="w-4 h-4 cursor-pointer opacity-60 hover:opacity-100 transition hidden sm:block" src={assets.loop_icon} alt="Loop" />
        </div>

        <div className="flex items-center gap-2 w-full mt-1">
          <p className="text-[10px] text-[#a7a7a7] min-w-[30px] font-medium text-right">{time ? time.currentTime.minute : 0}:{time ? String(time.currentTime.second).padStart(2, '0') : '00'}</p>
          <div
            ref={seekBg}
            onClick={seekBgClick}
            className="flex-1 bg-[#4d4d4d] rounded-full cursor-pointer h-1 group relative overflow-hidden"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-white rounded-full group-hover:bg-[#1db954] transition-colors"
            />
          </div>
          <p className="text-[10px] text-[#a7a7a7] min-w-[30px] font-medium">{time ? time.totalTime.minute : 0}:{time ? String(time.totalTime.second).padStart(2, '0') : '00'}</p>
        </div>
      </div>

      {/* Volume - Only on larger screens */}
      <div className="hidden md:flex items-center gap-4 w-[30%] justify-end opacity-70">
        <img className="w-5 h-5 cursor-pointer hover:opacity-100" src={assets.queue_icon} alt="Queue" />
        <img className="w-5 h-5 cursor-pointer hover:opacity-100" src={assets.speaker_icon} alt="Devices" />
        <div className="flex items-center gap-2">
          <img className="w-5 h-5 cursor-pointer hover:opacity-100" src={assets.volume_icon} alt="Volume" />
          <div className="w-20 bg-gray-600 h-1 rounded-full cursor-pointer group">
            <div className="h-1 w-1/2 bg-white rounded-full group-hover:bg-[#1db954]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
