import React from 'react'
import { Link } from 'react-router-dom'
import Menu from "./Menu"
const Nav = () => {
  return (
    <nav className="py-4 px-6 min-h-[10vh] flex justify-between items-center w-full sticky top-0 bg-slate-50 z-10">
        <Link to="/">
            <h3 className="text-xl font-semibold text-[#00acee]">Quotweet</h3>
            
        </Link>
        
        <Menu/>
    </nav>
  )
}

export default Nav