import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Budget from "./pages/Budget";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/budget" element={<Budget />} />
    </Routes>
  );
}

export default App;

