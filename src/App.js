import Sidebar from "./components/slidebar/Slidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
