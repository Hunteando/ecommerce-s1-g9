import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Routes } from "./routes/Router";
import React from 'react'



function App() {
  return (
    <div style={{backgroundColor: "#212529"}}>
    <NavBar/>
    <Routes/>
    <Footer/>
    </div>
  );
}

export default App;
