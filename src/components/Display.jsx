import React, { useEffect, useRef } from "react";
import DisplayHome from "./DisplayHome";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

function Display() {
  const displayref = useRef();
  const loc = useLocation();
  const isAlbum = loc.pathname.includes("album");
  const albumId = isAlbum ? loc.pathname.split("/").pop() : "";
  const album = albumsData[Number(albumId)];
  const bgColor = isAlbum && album ? album.bgColor : "#121212";

     useEffect(()=>{
      if(displayref.current) {
        if(isAlbum && album)
        {
          displayref.current.style.background = `linear-gradient(${bgColor},#121212)`;
        }
        else{
          displayref.current.style.background = "#121212";
        }
      }
     })
  return (
    <div
      ref={displayref}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />}></Route>
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
