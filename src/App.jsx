import { useEffect, useState } from "react";
import "./App.css";
import Main_Page from "./Main_Page";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import PokeDescription from "./PokeDescription";
function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Main_Page />} />
    <Route path='/about' element={<About/>} />
    <Route path='/:name' element={<PokeDescription/>}/>
    </Routes>
    </>
  );
}

export default App;
