import "./App.css";
import UseRef01 from "./ExistingHooks/UseRef01";
import UseRefPreviousState from "./ExistingHooks/UseRefPreviousState";
import UseMemo from "./ExistingHooks/UseMemo";
import UseCallback from "./ExistingHooks/UseCallback";
import UseCallback1 from "./ExistingHooks/UseCallBack1";
import CustomuseFetch from "./ExistingHooks/CustomuseFetch";
import CustomUseLocalStorage from "./ExistingHooks/CustomUseLocalStorage";
import UseContext from "./ExistingHooks/UseContext/UseContext";
function App() {
  return (
    <div className="App">
      {/* <UseRef01 /> */}
      {/* <UseRefPreviousState /> */}
      <UseContext />
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseCallback1 /> */}
      {/* <CustomuseFetch /> */}
      {/* <CustomUseLocalStorage /> */}
    </div>
  );
}

export default App;
