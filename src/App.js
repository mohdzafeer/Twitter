import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home/Home'
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/Login/SignUp";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
 


function App() {
  return (
    <div>
      
        <Router>
          
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
