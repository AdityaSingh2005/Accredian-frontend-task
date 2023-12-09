import Navbar from "./components/navbar";
import Signup from "./pages/SignUp/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login/login';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;