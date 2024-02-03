import Sidebar from "./components/slidebar/Slidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
