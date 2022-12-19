import React, { useState } from "react";
import "./App.css";
import MainCanvas from "./components/MainCanvas";
import Toolbelt from "./components/Toolbelt";

function App() {
  const [mode, setMode] = useState("");

  var changeMode = (newMode: string): void => {
    setMode(newMode);
  };

  return (
    <div className="App">
      <div className="w-screen h-screen flex-col bg-slate-700 ">
        <div
          id="overlay"
          className="h-full w-full grid grid-rows-20 grid-cols-25"
        >
          <nav className="col-span-25 row-span-1 text-white font-bold bg-gray-800 flex items-center ">
            <h1 className="text-2xl font-sans pl-10">Drawable</h1>
          </nav>
          <div id="side-toolbelt" className="col-span-2 row-span-19 m-auto">
            <Toolbelt changeMode={changeMode} />
          </div>
          <div id="main-canvas" className="col-span-23 row-span-19 p-20">
            <MainCanvas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
