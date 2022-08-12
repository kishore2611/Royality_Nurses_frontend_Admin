import Welcome from "./pages/Welcome/welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Registration from "./pages/Registration/registration";
import Login from "./pages/Login/login";
import ForgetPassword from "./pages/forgetpassword/forgetPassword";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/registration" element={<Registration/>}/>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
