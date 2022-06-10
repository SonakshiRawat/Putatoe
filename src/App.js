import "./App.css";
import Nav from "./components/Nav";
import Facilities from "./components/Facilities";
import Topdeals from "./components/Topdeals";
import Footer from "./components/Footer";
import Sidebar from "./components/StaticSidebar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);

  function changeValue(data) {
    setMode(data);
    return data;
  }
  return (
    <div className="App">
      <Nav func={changeValue} />
      <div className="divide">
        <Sidebar n={mode} />
        <div className="part">
          <Facilities />
          <Topdeals />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
