import { Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import Project from "./Project";
import Contant from "./Contant";
import { Route} from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contant" element={<Contant />} />

        
          

      </Routes>
    
    
    
    </>
  );
}

export default App;
