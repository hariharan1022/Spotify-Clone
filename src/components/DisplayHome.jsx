import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import SongItems from "./SongItems";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-8 mt-6">
        <h1 className="my-5 font-bold text-3xl bg-gradient-to-r from-white to-[#1db954] bg-clip-text text-transparent">🎵 Your Top Playlist</h1>
        <div className="flex overflow-auto gap-4 pb-4 scroll-smooth">
          {albumsData.map((item, index) => (
            <AlbumItems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h1 className="my-5 font-bold text-3xl bg-gradient-to-r from-white to-[#1db954] bg-clip-text text-transparent">🎧 Recently Played</h1>
        <div className="flex overflow-auto gap-4 pb-4 scroll-smooth">
          {songsData.map((item, index) => (
            <SongItems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
