import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm px-6 py-3"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">

        {/* LOGO */}
        <h1 className="text-center md:text-left font-bold text-lg dark:text-white">
           Profil Kelompok One
        </h1>

        {/* MENU */}
        <div className="flex justify-center mt-2 md:mt-0 gap-6">

          <Link
            to="/"
            className="relative text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-300 hover:w-full"></span>
          </Link>

          <Link
            to="/muhammad-faishal-nur-firdaus"
            className="relative text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Faishal
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-300 hover:w-full"></span>
          </Link>

          <Link
            to="/evan-swardana-adinata"
            className="relative text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Evan
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-300 hover:w-full"></span>
          </Link>

          <Link
            to="/tiara-nurfadilah"
            className="relative text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Tiara
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-300 hover:w-full"></span>
          </Link>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 px-3 py-1 rounded-lg 
            bg-gray-200 dark:bg-gray-700 
            text-gray-800 dark:text-white 
            hover:scale-105 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;