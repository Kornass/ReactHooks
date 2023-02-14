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
        link
        ${location.pathname === "/" ? "bg-green-200" : "bg-blue-200"}
       `}
      >
        Home
      </NavLink>
      <NavLink
        to="/navigate"
        className={` 
        link
        ${location.pathname === "/navigate" ? "bg-green-200" : "bg-gray-200"}
        `}
      >
        useNavigate
      </NavLink>
      <NavLink
        to={`/params/${"from navigation"}`}
        className={` 
        link
        ${
          location.pathname.includes("/params") ? "bg-green-200" : "bg-gray-200"
        }
       `}
      >
        useParams
      </NavLink>
      <NavLink
        to="/location"
        className={` 
        link
        ${location.pathname === "/location" ? "bg-green-200" : "bg-gray-200"}
        `}
      >
        useLocation
      </NavLink>
      <NavLink
        to="/useref"
        className={`
        link
        ${location.pathname === "/useref" ? "bg-green-200" : "bg-gray-200"}
       `}
      >
        useRef
      </NavLink>
      <NavLink
        to="/userefstate"
        className={`
        link 
        ${location.pathname === "/userefstate" ? "bg-green-200" : "bg-gray-200"}
      `}
      >
        useRefPrevState
      </NavLink>
      <NavLink
        to="/context"
        className={`
        link 
        ${location.pathname === "/context" ? "bg-green-200" : "bg-gray-200"}
       `}
      >
        useContext
      </NavLink>
      <NavLink
        to="/memo"
        className={`
        link  
        ${location.pathname === "/memo" ? "bg-green-200" : "bg-gray-200"}
      `}
      >
        useMemo
      </NavLink>
      <NavLink
        to="/callback"
        className={`
        link
        ${location.pathname === "/callback" ? "bg-green-200" : "bg-gray-200"}
        
        `}
      >
        useCallback
      </NavLink>
      <NavLink
        to="/callbacktodo"
        className={`
        link
        ${
          location.pathname === "/callbacktodo" ? "bg-green-200" : "bg-gray-200"
        }
        `}
      >
        useCallback1
      </NavLink>
      <NavLink
        to="/reducer"
        className={`
        link
        ${location.pathname === "/reducer" ? "bg-green-200" : "bg-gray-200"}
     `}
      >
        useReducer
      </NavLink>
      <NavLink
        to="/fetch"
        className={`
        link
        ${location.pathname === "/fetch" ? "bg-green-200" : "bg-gray-200"}
    `}
      >
        Custom useFetch
      </NavLink>
      <NavLink
        to="/storage"
        className={`
        link 
        ${location.pathname === "/storage" ? "bg-green-200" : "bg-gray-200"}
     `}
      >
        Custom useLocalStorage
      </NavLink>
    </nav>
  );
}

export default Navbar;
