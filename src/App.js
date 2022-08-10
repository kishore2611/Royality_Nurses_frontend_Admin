import Welcome from "./pages/Welcome/welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration/registration";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
