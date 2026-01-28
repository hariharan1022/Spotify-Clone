import React, { useContext } from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import SongItems from "./SongItems";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {
  const { searchQuery } = useContext(PlayerContext);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const filteredSongs = songsData.filter(song =>
    song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAlbums = albumsData.filter(album =>
    album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    album.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (searchQuery) {
    return (
      <>
        <Navbar />
        <div className="mb-8 mt-6">
          <h2 className="text-2xl font-bold text-white mb-6">Search Results for "{searchQuery}"</h2>

          {filteredSongs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Songs</h3>
              <div className="flex overflow-auto gap-4 pb-4 scroll-smooth">
                {filteredSongs.map((item, index) => (
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
          )}

          {filteredAlbums.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Albums</h3>
              <div className="flex overflow-auto gap-4 pb-4 scroll-smooth">
                {filteredAlbums.map((item, index) => (
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
          )}

          {filteredSongs.length === 0 && filteredAlbums.length === 0 && (
            <div className="text-center text-gray-400 mt-10">
              <p>No results found for "{searchQuery}"</p>
              <p className="text-sm mt-2">Please try a different search term.</p>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Featured Banner */}
      <div className="mb-8 mt-6 bg-gradient-to-r from-[#1db954]/20 to-[#191414] rounded-lg p-6 border border-[#282828] hover:border-[#1db954] transition">
        <h2 className="text-4xl font-bold text-white mb-2">{getGreeting()}</h2>
        <p className="text-gray-300">Discover new music and your favorites</p>
      </div>

      {/* Top Playlists */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold text-3xl bg-gradient-to-r from-white to-[#1db954] bg-clip-text text-transparent">🎵 Popular Playlists</h1>
          <a href="#" className="text-[#1db954] hover:text-white transition text-sm font-semibold">See all</a>
        </div>
        <div className="flex overflow-auto gap-4 pb-4 scroll-smooth">
          {albumsData.slice(0, 6).map((item, index) => (
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

      {/* Recently Played */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold text-3xl bg-gradient-to-r from-white to-[#1db954] bg-clip-text text-transparent">🎧 Recently Played</h1>
          <a href="#" className="text-[#1db954] hover:text-white transition text-sm font-semibold">See all</a>
        </div>
        <div className="flex overflow-auto gap-4 pb-4 scroll-smooth">
          {songsData.slice(0, 8).map((item, index) => (
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

      {/* Trending Now */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold text-3xl bg-gradient-to-r from-white to-[#1db954] bg-clip-text text-transparent">🔥 Trending Now</h1>
          <a href="#" className="text-[#1db954] hover:text-white transition text-sm font-semibold">See all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {songsData.slice(0, 4).map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-[#282828] to-[#121212] p-4 rounded-lg hover:bg-[#333333] transition cursor-pointer group">
              <div className="relative mb-4">
                <img src={item.image} alt={item.name} className="w-full rounded-lg" />
                <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1db954] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
              <p className="font-bold text-sm text-white line-clamp-2">{item.name}</p>
              <p className="text-xs text-gray-400 line-clamp-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended For You */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold text-3xl bg-gradient-to-r from-white to-[#1db954] bg-clip-text text-transparent">⭐ Made For You</h1>
          <a href="#" className="text-[#1db954] hover:text-white transition text-sm font-semibold">See all</a>
        </div>
        <div className="flex overflow-auto gap-4 pb-4 scroll-smooth">
          {songsData.slice(4, 10).map((item, index) => (
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

      {/* New Releases */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold text-3xl bg-gradient-to-r from-white to-[#1db954] bg-clip-text text-transparent">🆕 New Releases</h1>
          <a href="#" className="text-[#1db954] hover:text-white transition text-sm font-semibold">See all</a>
        </div>
        <div className="flex overflow-auto gap-4 pb-4 scroll-smooth">
          {albumsData.slice(0, 5).map((item, index) => (
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
    </>
  );
};

export default DisplayHome;
