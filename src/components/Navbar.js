import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      className="
    bg-gray-300
    w-full
    py-3
    shadow-lg
    flex
    flex-wrap
"
    >
      <NavLink
        to="/"
        className={`
        ${location.pathname === "/" ? "bg-green-200" : "bg-blue-200"}
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        my-2
        ml-3
        active:bg-purple-100`}
      >
        Home
      </NavLink>
      <NavLink
        to="/navigate"
        className={` 
        ${location.pathname === "/navigate" ? "bg-green-200" : "bg-gray-200"}
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        ml-3
        my-2
        active:bg-purple-100`}
      >
        useNavigate
      </NavLink>
      <NavLink
        to={`/params/${"from navigation"}`}
        className={` 
        ${
          location.pathname.includes("/params") ? "bg-green-200" : "bg-gray-200"
        }
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        ml-3
        my-2
        active:bg-purple-100`}
      >
        useParams
      </NavLink>
      <NavLink
        to="/location"
        className={` 
        ${location.pathname === "/location" ? "bg-green-200" : "bg-gray-200"}
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        ml-3
        my-2
        active:bg-purple-100`}
      >
        useLocation
      </NavLink>
      <NavLink
        to="/useref"
        className={`
        ${location.pathname === "/useref" ? "bg-green-200" : "bg-gray-200"}
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        my-2
        ml-3
        active:bg-purple-100`}
      >
        useRef
      </NavLink>
      <NavLink
        to="/userefstate"
        className={` 
        ${location.pathname === "/userefstate" ? "bg-green-200" : "bg-gray-200"}
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        my-2
        ml-3
        active:bg-purple-100`}
      >
        useRefPrevState
      </NavLink>
      <NavLink
        to="/context"
        className={` 
        ${location.pathname === "/context" ? "bg-green-200" : "bg-gray-200"}
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        my-2
        ml-3
        active:bg-purple-100`}
      >
        useContext
      </NavLink>
      <NavLink
        to="/memo"
        className={`  
        ${location.pathname === "/memo" ? "bg-green-200" : "bg-gray-200"}
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        my-2
        ml-3
        active:bg-purple-100`}
      >
        useMemo
      </NavLink>
      <NavLink
        to="/callback"
        className={`
        ${location.pathname === "/callback" ? "bg-green-200" : "bg-gray-200"}
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        ml-3
        my-2
        active:bg-purple-100
        `}
      >
        useCallback
      </NavLink>
      <NavLink
        to="/callbacktodo"
        className={`
        ${
          location.pathname === "/callbacktodo" ? "bg-green-200" : "bg-gray-200"
        }
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        ml-3
        my-2
        active:bg-purple-100`}
      >
        useCallback1
      </NavLink>
      <NavLink
        to="/reducer"
        className={`
        ${location.pathname === "/reducer" ? "bg-green-200" : "bg-gray-200"}
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        my-2
        ml-3
        active:bg-purple-100`}
      >
        useReducer
      </NavLink>
      <NavLink
        to="/fetch"
        className={`
        ${location.pathname === "/fetch" ? "bg-green-200" : "bg-gray-200"}
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        ml-3
        my-2
        active:bg-purple-100`}
      >
        Custom useFetch
      </NavLink>
      <NavLink
        to="/storage"
        className={` 
        ${location.pathname === "/storage" ? "bg-green-200" : "bg-gray-200"}
        hover:bg-gray-100
        hover:text-black 
        text-gray-800 
        py-1.5 px-3 
        rounded shadow
        ml-3
        my-2
        active:bg-purple-100`}
      >
        Custom useLocalStorage
      </NavLink>
    </nav>
  );
}

export default Navbar;
