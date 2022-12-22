import { fabric } from "fabric";
import { FabricJSEditor } from "fabricjs-react";

export const onAddCircle = (editor: FabricJSEditor | undefined) => {
  editor?.addCircle();
};

export const onAddRectangle = (editor: FabricJSEditor | undefined) => {
  editor?.addRectangle();
};

export const onAddImage = (editor: FabricJSEditor | undefined) => {
  document.getElementById("image-file")?.click();
};

export const onAddTriangle = (editor: FabricJSEditor | undefined) => {
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

export const onAddLine = (editor: FabricJSEditor | undefined) => {
  editor?.addLine();
};

export const onAddText = (editor: FabricJSEditor | undefined) => {
  var textEditable = new fabric.Textbox("Editable Textbox", {
    width: 500,
    editable: true,
    fill: "#000000",
  });

  editor?.canvas.add(textEditable);
  editor?.canvas?.renderAll();
};

export const onRemove = (editor: FabricJSEditor | undefined) => {
  editor?.deleteSelected();
};

export const onColorRed = (editor: FabricJSEditor | undefined) => {
  editor?.canvas?.getActiveObjects()?.forEach((element) => {
    if (element.type === "textbox") {
      element.set("fill", "#FF0000");
    } else {
      element.set("stroke", "#FF0000");
    }
  });

  editor?.canvas?.renderAll();
};

export const onColorGreen = (editor: FabricJSEditor | undefined) => {
  editor?.canvas?.getActiveObjects()?.forEach((element) => {
    if (element.type === "textbox") {
      element.set("fill", "#00FF00");
    } else {
      element.set("stroke", "#00FF00");
    }
  });
  editor?.canvas?.renderAll();
};

export const onColorBlue = (editor: FabricJSEditor | undefined) => {
  editor?.canvas?.getActiveObjects()?.forEach((element) => {
    if (element.type === "textbox") {
      element.set("fill", "#0000FF");
    } else {
      element.set("stroke", "#0000FF");
    }
  });
  editor?.canvas?.renderAll();
};

// Still need event type refactor
export const imageHandler = (e: any, editor: FabricJSEditor | undefined) => {
  let imageUpload = document.getElementById("image-file");

  if (imageUpload != null && e != null) {
    var reader = new FileReader();
    reader.onload = function (event: any) {
      var imgObj = new Image();
      imgObj.src = event.target.result;
      imgObj.onload = function () {
        var image = new fabric.Image(imgObj);
        image
          .set({
            left: 0,
            top: 0,
            angle: 0,
            padding: 10,
          })
          .scale(0.2);
        editor?.canvas.add(image);
      };
    };
    reader.readAsDataURL(e.target.files[0]);
  }
};
