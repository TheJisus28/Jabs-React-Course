import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-evenly text-2xl bg-black text-white py-2">
      <div className="flex items-center flex-1">
        <NavLink to={"/"} className={"px-4 py-2  rounded hover:bg-gray-700"}>
          Home
        </NavLink>
      </div>
      <NavLink
        to={"/page1"}
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 bg-white text-black rounded"
            : "px-4 py-2 rounded hover:bg-gray-700"
        }
      >
        Page 1
      </NavLink>
      <NavLink
        to={"/page2"}
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 bg-white text-black rounded"
            : "px-4 py-2 rounded hover:bg-gray-700"
        }
      >
        Page 2
      </NavLink>
      <NavLink
        to={"/page3"}
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 bg-white text-black rounded"
            : "px-4 py-2 rounded hover:bg-gray-700"
        }
      >
        Page 3
      </NavLink>
      <NavLink
        to={"/page4/penedemono"}
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 bg-white text-black rounded"
            : "px-4 py-2 rounded hover:bg-gray-700"
        }
      >
        Page 4
      </NavLink>
    </nav>
  );
}

export default NavBar;
