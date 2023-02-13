import UseRef01 from "./ExistingHooks/UseRef01";
import UseRefPreviousState from "./ExistingHooks/UseRefPreviousState";
import UseContext from "./ExistingHooks/UseContext/UseContext";
import UseMemo from "./ExistingHooks/UseMemo";
import UseCallback from "./ExistingHooks/UseCallback";
import UseCallback1 from "./ExistingHooks/UseCallBack1";
import CustomuseFetch from "./CustomHooks/useFetch/CustomuseFetch";
import CustomUseLocalStorage from "./CustomHooks/useLocalStorage/CustomUseLocalStorage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UseNavigate from "./ExistingHooks/UseNavigate";
import UseParams from "./ExistingHooks/UseParams";
import UseReducer from "./ExistingHooks/UseReducer";
import UseLocation from "./ExistingHooks/UseLocation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useref" element={<UseRef01 />} />
        <Route path="/userefstate" element={<UseRefPreviousState />} />
        <Route path="/context" element={<UseContext />} />
        <Route path="/memo" element={<UseMemo />} />
        <Route path="/callback" element={<UseCallback />} />
        <Route path="/callbacktodo" element={<UseCallback1 />} />
        <Route path="/fetch" element={<CustomuseFetch />} />
        <Route path="/storage" element={<CustomUseLocalStorage />} />
        <Route path="/reducer" element={<UseReducer />} />
        <Route path="/navigate" element={<UseNavigate />} />
        {/* We specify a params in our URL. Whatever will be passed it will be accessible in params object under 'data' property */}
        <Route path="/params/:data" element={<UseParams />} />
        <Route path="/location" element={<UseLocation />} />
      </Routes>
    </Router>
  );
}

export default App;
