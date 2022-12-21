import React, { useState, useEffect } from "react";
import "./App.css";
import MainCanvas from "./components/MainCanvas";
import Toolbelt from "./components/Toolbelt";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import testImage from "./test.jpg";

function App() {
  const [mode, setMode] = useState("");
  const [drawing, setDrawing] = useState(false);

  const { selectedObjects, editor, onReady } = useFabricJSEditor();

  var changeMode = (newMode: string): void => {
    setMode(newMode);
  };

  var changeDrawing = (): void => {
    setDrawing(!drawing);
  };

  useEffect(() => {
    if (editor) {
      editor.canvas.backgroundColor = "white";
    }
    editor?.canvas?.renderAll();
    // editor.setFillColor("transparent");
  }, [editor]);

  useEffect(() => {
    let imageUpload = document.getElementById("image-file");

    imageUpload?.addEventListener("change", addImage);
  }, []);

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

  // useEffect(() => {
  //   fabric.Image.fromURL("./test.jpg", function (img) {
  //     editor?.canvas.add(img);
  //   });
  // }, [fabric, editor]);

  const onAddCircle = () => {
    editor?.addCircle();
  };

  const onAddRectangle = () => {
    editor?.addRectangle();
  };

  const onAddImage = () => {
    document.getElementById("image-file")?.click();
  };

  const addImage = (e: any) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (f: any) {
      let data = f.target.result;
      fabric.Image.fromURL(data, function (img) {
        let oImg = img.set({ left: 0, top: 0, angle: 0 }).scale(0.2);
        editor?.canvas.add(oImg).renderAll();
      });
    };
    reader.readAsDataURL(file);
  };

  const onAddTriangle = () => {
    var triangle = new fabric.Triangle({
      width: 50,
      height: 50,
      fill: "",
      stroke: "black",
      strokeWidth: 1,
      cornerColor: "blue",
      angle: 0,
    });

    editor?.canvas.add(triangle);
  };

  const onAddLine = () => {
    editor?.addLine();
  };

  const onAddText = () => {
    var textEditable = new fabric.Textbox("Editable Textbox", {
      width: 500,
      editable: true,
      fill: "#000000",
    });

    editor?.canvas.add(textEditable);
    editor?.canvas?.renderAll();
  };

  const onRemove = () => {
    editor?.deleteSelected();
  };

  const onColorRed = () => {
    editor?.canvas?.getActiveObjects()?.forEach((element) => {
      if (element.type === "textbox") {
        element.set("fill", "#FF0000");
      } else {
        element.set("stroke", "#FF0000");
      }
    });

    editor?.canvas?.renderAll();
  };

  const onColorGreen = () => {
    editor?.canvas?.getActiveObjects()?.forEach((element) => {
      if (element.type === "textbox") {
        element.set("fill", "#00FF00");
      } else {
        element.set("stroke", "#00FF00");
      }
    });
    editor?.canvas?.renderAll();
  };

  const onColorBlue = () => {
    editor?.canvas?.getActiveObjects()?.forEach((element) => {
      if (element.type === "textbox") {
        element.set("fill", "#0000FF");
      } else {
        element.set("stroke", "#0000FF");
      }
    });
    editor?.canvas?.renderAll();
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
            <Toolbelt
              changeMode={changeMode}
              changeDrawing={changeDrawing}
              drawing={drawing}
              onAddCircle={onAddCircle}
              onAddRectangle={onAddRectangle}
              onAddTriangle={onAddTriangle}
              onAddImage={onAddImage}
              onAddLine={onAddLine}
              onAddText={onAddText}
              onRemove={onRemove}
              onColorRed={onColorRed}
              onColorGreen={onColorGreen}
              onColorBlue={onColorBlue}
            />
          </div>
          <div id="main-canvas" className="col-span-23 row-span-19 p-20">
            <input
              type="file"
              id="image-file"
              accept="image/jpeg, image/png, image/jpg"
              className="hidden"
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
