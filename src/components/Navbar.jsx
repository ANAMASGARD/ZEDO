
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center 
      justify-center flex font-bold shadow-md" >
        <p className="blue-gradient_text"> ZEDO </p>
      </NavLink>
      <nav className="flex space-x-4">
      <NavLink to='/leaderboard' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Leaderboard
        </NavLink>
        <NavLink to='/play' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Play
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar




