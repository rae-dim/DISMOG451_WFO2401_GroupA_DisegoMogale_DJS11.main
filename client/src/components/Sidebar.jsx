import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { HomeRounded, CloseRounded, SearchRounded, FavoriteRounded, LightModeRounded, LogoutRounded} from "@mui/icons-material";
import Logopng from "../images/favicon-32x32.png";
import "../index.css"; 


export default function Sidebar({setMenuOpen, setDarkMode, darkMode})  {

  const menuItems = [
    {
      link: "/",
      name: "Listen Now",
      icon: <HomeRounded />
    },
  
    {
      link: "/search",
      name: "Explore",
      icon: <SearchRounded />
    },
  
    {
      link: "/favorites",
      name: "Favorites",
      icon: <FavoriteRounded />
    }
  ]
  
  const buttons = [
    {
      fun: () => setDarkMode(!darkMode),
      name: "Toggle Theme",
      icon: <LightModeRounded />
    },
  
    {
      fun: console.log('Log out'),
      name: "Log Out",
      icon: <LogoutRounded />
    }
  ]
  
  /* const [darkMode, setDarkMode] = useState(true); // Example state for toggling theme
 */
  return (
    <BrowserRouter>
    <div className={`flex flex-col h-full w-64 gap-2 ${darkMode ? 'bg-[#15171E] text-[#F2F3F4]' : 'bg-[#FFFFFF] text-[#111111]'}`}>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row w-full items-center justify-center gap-6 font-bold text-xl my-4">
          <img className="w-8 h-8 object-contain" src={Logopng} alt="Logo" />
          PODTASTIC
        </div>
        <div className="block md:hidden">
          <CloseRounded />
      </div>
      </div>
      {menuItems.map((item) =>(
        <Link to={item.link}>
          <div className={`flex flex-row px-4 items-center gap-6 cursor-pointer no-underline ${darkMode ? 'text-[#F2F3F4] hover:bg-[#660666]' : 'text-[#111111] hover:bg-[#E5E7EB]'}`}>
          {item.icon}
          <div className="py-3">{item.name}</div>
          </div>
        </Link>
      ))}
    <hr className="border-t border-gray-200 dark:bg-gray-700 my-4" />
    {buttons.map((button) =>(
      <button className={`flex flex-row px-4 items-center gap-6 cursor-pointer no-underline ${darkMode? 'text-[#F2F3F4] hover:bg-[#660666]' : 'text-[#111111] hover:bg-[#E5E7EB]'}`} onClick={button.fun}>
        {button.icon}
        <div className="py-3">{button.name}</div>
      </button>
    ))}
    </div> 
    </BrowserRouter>
  );
}