import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home'
// import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/Login/SignUp";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { ProtectedRoute } from "./pages/ProtectedRoutes/ProtectedRoutes";
import { LoadingPage } from "./pages/LoadingPage/LoadingPage";
import Notification from "./pages/NotificationPage/NotificationPage";
import Messages from "./pages/Messages/Messages";
import Explore from "./pages/Explore/Explore";
import Bookmark from "./pages/Bookmarks/Bookmark";
import { Profile } from "./pages/Profile/Profile";
import More from "./pages/More/More";
import { Feed } from "./pages/Feed/Feed";
import EditProfile from "./pages/Profile/EditProfile/EditProfile";
import Premium from "./pages/Premium/Premium";
import Hamburger from "./pages/Hamburger/Hamburger";
import { Widgets } from "./pages/Home/Widgets";
import { Sidebar } from "./pages/Home/Sidebar";
import Success from "./pages/Premium/Success";
import Failed from "./pages/Premium/Failed";










function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}>
            <Route index element={<Feed />} />

          </Route>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}>
            <Route path="feed" element={<Feed />} />
            <Route path="explore" element={<Explore />} />
            <Route path="notification" element={<Notification />} />
            <Route path="messages" element={<Messages />} />
            <Route path="bookmark" element={<Bookmark />} />
            <Route path="more" element={<More />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/editprofile" element={<EditProfile />} />
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="widgets" element={<Widgets />} />

          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="*" element={<ErrorPage />} />

          {/* <Route path="/payment" element={<Payment/>}/> */}
          {/* <Route path="/home/success" element={<Success/>}/> */}
          {/* <Route path="/payment/checkout-form" element={<CheckoutForm/>}/> */}
          {/* <Route path="/payment/success" element={<Success/>}/> */}
          <Route path="/hamburger" element={<Hamburger />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/premium/success" element={<Success />} />
          <Route path="/premium/failed" element={<Failed />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
