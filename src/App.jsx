import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParticlesBG from "./components/ParticlesBG";
import ThemeChanger from "./components/ThemeChangerButton";

function App() {
  const [theme, setTheme] = useState("white");

  function changeTheme() {
    theme === "white" ? setTheme("dark") : setTheme("white");
  }

  return (
    <div className="overflow-hidden">
      <ParticlesBG theme={theme} />
      <Navbar theme={theme} />
      <Outlet context={theme} />
      <ThemeChanger changeTheme={changeTheme} theme={theme} />
    </div>
  );
}

export default App;
