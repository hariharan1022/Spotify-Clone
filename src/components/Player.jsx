import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { seekBar, seekBg, play, pause, playStatus, track, time, after, before,seekBgClick } =
    useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-gradient-to-t from-black to-[#1db954]/10 flex justify-between items-center text-white px-4 border-t border-[#282828]">
      <div className="hidden lg:flex items-center gap-4 w-[25%]">
        <img className="w-12 h-12 rounded" src={track.image} alt="" />
        <div className="flex-1">
          <p className="font-semibold text-sm">{track.name}</p>
          <p className="text-xs text-gray-400">{track.desc.slice(0, 20)}</p>
        </div>
        <img className="w-4 cursor-pointer hover:text-[#1db954]" src={assets.like_icon} alt="" />
      </div>
      <div className="flex flex-col items-center gap-2 m-auto flex-1 px-4">
        <div className="flex gap-6">
          <img
            className="w-4 cursor-pointer hover:text-[#1db954] transition"
            src={assets.shuffle_icon}
            alt=""
          />
          <img onClick={before} className="w-4 cursor-pointer hover:text-[#1db954] transition" src={assets.prev_icon} alt="" />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-5 cursor-pointer hover:scale-110 transition bg-[#1db954] p-1.5 rounded-full"
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-5 cursor-pointer hover:scale-110 transition bg-[#1db954] p-1.5 rounded-full"
              src={assets.play_icon}
              alt=""
            />
          )}

          <img onClick={after} className="w-4 cursor-pointer hover:text-[#1db954] transition" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer hover:text-[#1db954] transition" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-3 w-full max-w-[600px]">
          <p className="text-xs">{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            ref={seekBg} onClick={seekBgClick}
            className="flex-1 bg-[#404040] rounded-full cursor-pointer h-1 hover:bg-[#1db954] transition"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-[#1db954] rounded-full"
            />
          </div>
          <p className="text-xs">{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-3 w-[25%] justify-end opacity-75 hover:opacity-100 transition">
        <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="" />
        <div className="w-24 bg-[#404040] h-1 rounded cursor-pointer hover:bg-[#1db954]"></div>
