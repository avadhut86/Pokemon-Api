import "./App.css";
import Main_Page from "./Main_Page";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import PokeDescription from "./PokeDescription";
import  Contact  from "./Contact";
function App() { 

  return (
    <>
    <Routes>  //switch also can write
    <Route path='/' element={<Main_Page />} />
    <Route path='/about' element={<About/>} />
    <Route path='/pokemon/:name' element={<PokeDescription/>} />
    <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;
