import React, { useContext } from "react";
import { albumsData, songsData, artistsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import SongItems from "./SongItems";
import ArtistItem from "./ArtistItem";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {
  const { searchQuery } = useContext(PlayerContext) || {};

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const filteredSongs = songsData.filter(song =>
    song.name.toLowerCase().includes(searchQuery?.toLowerCase() || "") ||
    song.desc.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  const filteredAlbums = albumsData.filter(album =>
    album.name.toLowerCase().includes(searchQuery?.toLowerCase() || "") ||
    album.desc.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  if (searchQuery) {
    return (
      <>
        <div className="mb-8 mt-6 px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Search Results for "{searchQuery}"</h2>

          <div className="flex overflow-auto gap-4 pb-4">
            {filteredSongs.length > 0 && (
              filteredSongs.map((item, index) => (
                <SongItems
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  id={item.id}
                  image={item.image}
                />
              ))
            )}

            {filteredAlbums.length > 0 && (
              filteredAlbums.map((item, index) => (
                <AlbumItems
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  id={item.id}
                  image={item.image}
                />
              ))
            )}
          </div>

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
      <div className="px-4">
        {/* Featured Banner */}
        <div className="mb-12 mt-6">
          <h2 className="text-4xl font-bold text-white mb-2">{getGreeting()}</h2>
          <p className="text-gray-400">Welcome back to your musical world.</p>
        </div>

        {/* Popular Artists */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <h1 className="font-bold text-2xl text-white hover:underline cursor-pointer">Popular Artists</h1>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm font-semibold">Show all</a>
          </div>
          <div className="flex overflow-auto gap-4 pb-4 no-scrollbar">
            {artistsData.map((item, index) => (
              <ArtistItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Top Playlists */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <h1 className="font-bold text-2xl text-white">Popular Playlists</h1>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm font-semibold">Show all</a>
          </div>
          <div className="flex overflow-auto gap-4 pb-4">
            {albumsData.slice(0, 8).map((item, index) => (
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

        {/* Trending Now */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <h1 className="font-bold text-2xl text-white hover:underline cursor-pointer">Trending Now</h1>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm font-semibold">Show all</a>
          </div>
          <div className="flex overflow-auto gap-4 pb-4 no-scrollbar">
            {songsData.slice(4, 12).map((item, index) => (
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

        {/* Recently Played */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <h1 className="font-bold text-2xl text-white">Recently Played</h1>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm font-semibold">Show all</a>
          </div>
          <div className="flex overflow-auto gap-4 pb-4">
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

        {/* All Songs / New Additions */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-5">
            <h1 className="font-bold text-2xl text-white hover:underline cursor-pointer">All Songs</h1>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm font-semibold">Show all</a>
          </div>
          <div className="flex overflow-auto gap-4 pb-4 no-scrollbar">
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
      </div>
    </>
  );
};

export default DisplayHome;
