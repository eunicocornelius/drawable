import { useState, useEffect } from "react";
import "./App.css";
import Toolbelt from "./components/Toolbelt";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { imageHandler } from "./utils/FabricUtils";

function App() {
  const { editor, onReady } = useFabricJSEditor();
  const [drawing, setDrawing] = useState(false);

  var changeDrawing = (): void => {
    setDrawing(!drawing);
  };

  useEffect(() => {
    if (editor) {
      editor.canvas.backgroundColor = "white";
    }
    editor?.canvas?.renderAll();
  }, [editor]);

  useEffect(() => {
    if (editor != undefined) {
      if (drawing) {
        editor!.canvas!.isDrawingMode = true;
      }
      if (!drawing) {
        editor!.canvas!.isDrawingMode = false;
      }
    }
  }, [drawing]);

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
            <Toolbelt
              editor={editor}
              changeDrawing={changeDrawing}
              drawing={drawing}
            />
          </div>
          <div id="main-canvas" className="col-span-23 row-span-19 p-20">
            <input
              type="file"
              id="image-file"
              accept="image/jpeg, image/png, image/jpg"
              className="hidden"
              onChange={() => imageHandler(window.event, editor)}
            />
            {/* <canvas className="w-full h-full bg-slate-100 shadow-2xl rounded-xl"></canvas> */}
            <FabricJSCanvas
              className="sample-canvas w-full h-full shadow-2xl "
              onReady={onReady}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
