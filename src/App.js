import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import MessagesContainer from "./components/Messages/MessagesContainer"
import Navbar from "./components/Navbar/Navbar"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper__content">
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path="/news" element={<Messages />} />
            <Route path="/music" element={<Messages />} />
            <Route path="/settings" element={<Messages />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App
