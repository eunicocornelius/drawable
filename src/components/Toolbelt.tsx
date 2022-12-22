import { FabricJSEditor } from "fabricjs-react";
import {
  onAddCircle,
  onAddImage,
  onAddLine,
  onAddRectangle,
  onAddText,
  onAddTriangle,
  onColorBlue,
  onColorGreen,
  onColorRed,
  onRemove,
} from "../utils/FabricUtils";

interface ToolbeltProps {
  editor: FabricJSEditor | undefined;
  drawing: boolean;
  changeDrawing: () => void;
}

function Toolbelt({ editor, drawing, changeDrawing }: ToolbeltProps) {
  return (
    <div className="  bg-slate-600 w-14 text-gray-400 p-4 flex space-y-2 rounded-xl flex-wrap">
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        value="upload-image"
        onClick={() => onAddImage(editor)}
      >
        <div className="material-icons-round ">drive_folder_upload</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => onAddRectangle(editor)}
      >
        <div className="material-icons-round ">crop_square</div>
      </button>
      {/* <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => onAddRectangle(editor)}
      >
        <div className="material-icons-outlined">rectangle</div>
      </button> */}
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => onAddTriangle(editor)}
      >
        <div className="material-icons-round ">signal_cellular_null</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => onAddCircle(editor)}
      >
        <div className="material-icons-round ">panorama_fish_eye</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => onAddLine(editor)}
      >
        <div className="material-icons ">timeline</div>
      </button>
      <button
        className="text-red-400 hover:text-red-500 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => onColorRed(editor)}
      >
        <div className="material-icons-round ">square</div>
      </button>
      <button
        className="text-green-400 hover:text-green-500 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => onColorGreen(editor)}
      >
        <div className="material-icons-round ">square</div>
      </button>
      <button
        className="text-blue-400 hover:text-blue-500 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => onColorBlue(editor)}
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
        onClick={() => onAddText(editor)}
      >
        <div className="material-icons">text_fields</div>
      </button>
      <button
        className="hover:text-gray-300 hover:scale-125 transition ease-in-out duration-300"
        onClick={() => onRemove(editor)}
      >
        <div className="material-icons-outlined">remove_circle</div>
      </button>
    </div>
  );
}

export default Toolbelt;
