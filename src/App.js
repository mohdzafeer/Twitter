import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home/Home'
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/Login/SignUp";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { ProtectedRoute } from "./pages/ProtectedRoutes/ProtectedRoutes";
import { LoadingPage } from "./pages/LoadingPage/LoadingPage";
import Notification from "./pages/NotificationPage/NotificationPage";
import Messages from "./pages/Messages/Messages";
import Explore from "./pages/Explore/Explore";
import Bookmark from "./pages/Bookmarks/Bookmark";
import Lists from "./pages/Lists/Lists";
import { Profile } from "./pages/Profile/Profile";
import More from "./pages/More/More";
import { Feed } from "./pages/Feed/Feed";
// import { Feed } from "@mui/icons-material";


 


function App() {
  return (
    <div>
      
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}>
              <Route path="feed" element={<Feed/>}/>
              <Route path="explore" element={<Explore/>}/>
              <Route path="notification" element={<Notification/>}/>
              <Route path="messages" element={<Messages/>}/>
              <Route path="bookmark" element={<Bookmark/>}/>
              <Route path="lists" element={<Lists/>}/>
              <Route path="more" element={<More/>}/>
              <Route path="profile" element={<Profile/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/loading" element={<LoadingPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
