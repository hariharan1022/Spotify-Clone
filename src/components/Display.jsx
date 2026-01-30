import React, { useEffect, useRef, useState } from "react";
import DisplayHome from "./DisplayHome";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
import Navbar from "./Navbar";

function Display() {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (displayRef.current) {
      setIsScrolled(displayRef.current.scrollTop > 0);
    }
  };

  useEffect(() => {
    if (isAlbum) {
      const albumId = location.pathname.split("/").pop();
      const album = albumsData.find((album) => album.id === Number(albumId));
      if (album && displayRef.current) {
        displayRef.current.style.background = `linear-gradient(${album.bgColor}, #121212)`;
      } else if (displayRef.current) {
        displayRef.current.style.background = `#121212`;
      }
    } else if (displayRef.current) {
      displayRef.current.style.background = `#121212`;
    }
  }, [isAlbum, location]);

  return (
    <div
      ref={displayRef}
      onScroll={handleScroll}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Navbar isScrolled={isScrolled} />
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="*" element={<DisplayHome />} />
      </Routes>
    </div>
  );
}

export default Display;
