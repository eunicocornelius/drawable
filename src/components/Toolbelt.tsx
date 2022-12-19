import React from "react";

interface ToolbeltProps {
  changeMode: (newMode: string) => void;
}

function Toolbelt({ changeMode }: ToolbeltProps) {
  return (
    <div className="  bg-slate-600 w-14 text-gray-400 p-4 flex space-y-2 rounded-xl flex-wrap">
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        value="upload-image"
        onClick={() => changeMode("upload-image")}
      >
        <div className="material-icons-round ">drive_folder_upload</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => changeMode("square")}
      >
        <div className="material-icons-round ">crop_square</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => changeMode("rectangle")}
      >
        <div className="material-icons-outlined">rectangle</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => changeMode("triangle")}
      >
        <div className="material-icons-round ">signal_cellular_null</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => changeMode("circle")}
      >
        <div className="material-icons-round ">panorama_fish_eye</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => changeMode("line")}
      >
        <div className="material-icons ">timeline</div>
      </button>
      <button
        className="text-red-400 hover:text-red-500 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => changeMode("color-red")}
      >
        <div className="material-icons-round ">square</div>
      </button>
      <button
        className="text-green-400 hover:text-green-500 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => changeMode("color-green")}
      >
        <div className="material-icons-round ">square</div>
      </button>
      <button
        className="text-blue-400 hover:text-blue-500 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => changeMode("color-blue")}
      >
        <div className="material-icons-round ">square</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => changeMode("pencil")}
      >
        <div className="material-icons-outlined">draw</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => changeMode("text-field")}
      >
        <div className="material-icons">text_fields</div>
      </button>
    </div>
  );
}

export default Toolbelt;
