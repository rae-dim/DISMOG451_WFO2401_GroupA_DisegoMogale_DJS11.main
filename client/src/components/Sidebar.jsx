import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeRounded, CloseRounded } from "@mui/icons-material";
import Logopng from "../images/favicon-32x32.png";
import "../index.css"; 

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(true); // Example state for toggling theme

  return (
    <div className={`flex flex-col h-full w-[25%] gap-2 ${darkMode ? 'bg-[#15171E] text-[#F2F3F4]' : 'bg-[#FFFFFF] text-[#111111]'}`}>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row w-full items-center justify-center gap-6 font-bold text-xl my-4">
          <img className="w-8 h-8 object-contain" src={Logopng} alt="Logo" />
          PODTASTIC
        </div>
        <div className="hidden md:block">
          <CloseRounded />
      </div>
      </div>
      <div className={`flex flex-row px-4 items-center gap-6 cursor-pointer ${darkMode ? 'text-[#F2F3F4] hover:bg-[#F2F3F4]' : 'text-[#111111] hover:bg-[#E5E7EB]'}`}>
        <Link to="/">
          <HomeRounded />
          <div className="py-3">Listen Now</div>
        </Link>
      </div>
      {/* <button
        className="m-4 p-2 bg-gray-500 text-white rounded"
        onClick={() => setDarkMode(prevMode => !prevMode)}
      >
        Toggle Theme
      </button>*/}
    </div> 
  );
}