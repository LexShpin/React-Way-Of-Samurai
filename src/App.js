import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header/Header"
import Messages from "./components/Messages/Messages"
import MessagesContainer from "./components/Messages/MessagesContainer"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import UsersContainer from "./components/Users/UsersContainer"

const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper__content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path='/users' element={<UsersContainer />} />
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
