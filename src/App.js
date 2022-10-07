import "./App.css";
import Container from "./components/container/Container";
import AllMachine from "./components/pages/AllMachine";
import { Routes, Route } from "react-router-dom";
import SubMachine from "./components/pages/SubMachine";
import Setting from "./components/pages/Setting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<AllMachine />} />
          <Route path="home" element={<AllMachine />} />
          <Route path="sub-category" element={<SubMachine />} />
          <Route path="settings" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
