import React from "react";

interface ToolbeltProps {
  drawing: boolean;
  changeMode: (newMode: string) => void;
  changeDrawing: () => void;
  onAddCircle: () => void;
  onAddRectangle: () => void;
  onAddTriangle: () => void;
  onAddImage: () => void;
  onAddLine: () => void;
  onAddText: () => void;
  onRemove: () => void;
  onColorRed: () => void;
  onColorGreen: () => void;
  onColorBlue: () => void;
}

function Toolbelt({
  drawing,
  changeMode,
  changeDrawing,
  onAddCircle,
  onAddRectangle,
  onAddTriangle,
  onAddImage,
  onAddLine,
  onAddText,
  onRemove,
  onColorRed,
  onColorGreen,
  onColorBlue,
}: ToolbeltProps) {
  return (
    <div className="  bg-slate-600 w-14 text-gray-400 p-4 flex space-y-2 rounded-xl flex-wrap">
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        value="upload-image"
        onClick={onAddImage}
      >
        <div className="material-icons-round ">drive_folder_upload</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={onAddRectangle}
      >
        <div className="material-icons-round ">crop_square</div>
      </button>
      {/* <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={onAddRectangle}
      >
        <div className="material-icons-outlined">rectangle</div>
      </button> */}
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={onAddTriangle}
      >
        <div className="material-icons-round ">signal_cellular_null</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={onAddCircle}
      >
        <div className="material-icons-round ">panorama_fish_eye</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={onAddLine}
      >
        <div className="material-icons ">timeline</div>
      </button>
      <button
        className="text-red-400 hover:text-red-500 hover:scale-125 transition ease-in-out duration-300"
        onClick={onColorRed}
      >
        <div className="material-icons-round ">square</div>
      </button>
      <button
        className="text-green-400 hover:text-green-500 hover:scale-125 transition ease-in-out duration-300"
        onClick={onColorGreen}
      >
        <div className="material-icons-round ">square</div>
      </button>
      <button
        className="text-blue-400 hover:text-blue-500 hover:scale-125 transition ease-in-out duration-300"
        onClick={onColorBlue}
      >
        <div className="material-icons-round ">square</div>
      </button>
      <button
        className={
          drawing
            ? "text-white scale-125 transition ease-in-out duration-300"
            : "hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        }
        onClick={changeDrawing}
      >
        <div className="material-icons-outlined">draw</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={onAddText}
      >
        <div className="material-icons">text_fields</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={onRemove}
      >
        <div className="material-icons-outlined">remove_circle</div>
      </button>
    </div>
  );
}

export default Toolbelt;
