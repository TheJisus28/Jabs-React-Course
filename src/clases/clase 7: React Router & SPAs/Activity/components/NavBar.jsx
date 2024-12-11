import { useState } from "react";
import { NavLink } from "react-router-dom";
import usableKings from "../data/usable-kings";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 relative">
      <div className="flex items-center justify-between">
        <NavLink to={"/"} className="text-2xl font-semibold">
          Home
        </NavLink>
        {/* Menú de navegación */}
        <div className="hidden sm:flex space-x-6 text-lg">
          {usableKings.map((king) => (
            <NavLink
              key={king.key}
              to={`/king/${king.key}`}
              className="hover:text-gray-300 transition duration-300"
            >
              {king.name}
            </NavLink>
          ))}
        </div>

        {/* Menú hamburguesa en pantallas pequeñas */}
        <div className="sm:hidden">
          <button className="text-2xl" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas con blur */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 absolute top-0 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md z-50 mt-14">
          {usableKings.map((king) => (
            <NavLink
              key={king.key}
              to={`/king/${king.key}`}
              className="text-lg hover:text-gray-300"
              onClick={() => setMenuOpen(false)} // Cerrar el menú después de hacer clic
            >
              {king.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
