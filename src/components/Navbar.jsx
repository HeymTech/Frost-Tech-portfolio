import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo1.svg";
import Team from "./Team";

function Navbar() {
  const [showTeam, setShowTeam] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActive(section);
    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <>
      <nav className="fixed w-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-zinc-800 backdrop-blur-lg z-50 px-6 md:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Heym Tech"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
            Heym Tech
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300 items-center">
          {["about", "services", "projects", "media", "contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => handleClick(item)}
                  className={`transition capitalize ${
                    active === item
                      ? "text-blue-400"
                      : "hover:text-blue-400"
                  }`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-gray-300 text-xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden z-40`}
      >
        <div className="flex justify-end p-4">
          <FaTimes
            className="text-gray-300 text-xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 px-8 text-gray-300 font-medium">
          {["about", "services", "projects", "media", "contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => handleClick(item)}
                  className={`transition capitalize ${
                    active === item
                      ? "text-blue-400"
                      : "hover:text-blue-400"
                  }`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {showTeam && <Team onClose={() => setShowTeam(false)} />}
    </>
  );
}

export default Navbar;