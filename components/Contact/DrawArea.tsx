import React, { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { saveAs } from "file-saver";
import IconButton from "./IconButton";
import { IoIosColorPalette } from "react-icons/io";
import { showError, showSuccess } from "../../utils/notificationsFunctions";
import Popup from "reactjs-popup";
import { GithubPicker } from "react-color";
import { useTheme } from "next-themes";
import axios from "axios";

export default function DrawArea() {
  const drawRef = useRef(null);
  const [color, setColor] = useState("#000");

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const canvasColor = currentTheme === "dark" ? "#222831" : "#fff";

  const download = () => {
    saveAs(drawRef.current.getDataURL(), "drawing.jpg");
  };
  const clear = () => {
    drawRef.current.clear();
  };
  const undo = () => {
    drawRef.current.undo();
  };
  const send = () => {
    const variables = {
      content: drawRef.current.getDataURL("image/jpeg"),
    };

    // https://hakanlindahl.com/serverDrawing/
    axios({
      method: "post",
      url: "https://hakanlindahl.com/serverDrawing/",
      data: variables,
    })
      .then((res) => {
        showSuccess("Drawing was successfully sent!");
      })
      .catch((err) => {
        console.error(
          "Oh well, the mail could not be sent. Here some thoughts on the error that occured:",
          err
        );
        showError(err.message);
      });
  };

  const changeColor = (color) => {
    setColor(color.hex);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-center items-center relative">
        <div className="flex flex-col justify-center items-center">
          <Popup
            trigger={
              <button
                className="absolute left-0 top-0 bg-gray-300 rounded-lg shadow-md p-2 m-3
                             text-secondary z-10"
                onClick={changeColor}
              >
                <IoIosColorPalette size={30} />
              </button>
            }
            position="right center"
          >
            <GithubPicker
              color={color}
              colors={[
                "#B80000",
                "#DB3E00",
                "#FCCB00",
                "#008B02",
                "#006B76",
                "#1273DE",
                "#004DCF",
                "#5300EB",
                "#EB9694",
                "#FAD0C3",
                "#FEF3BD",
                "#C1E1C5",
                "#BEDADC",
                "#C4DEF6",
                "#BED3F3",
                "#D4C4FB",
                "#fff",
                "#000",
              ]}
              onChangeComplete={changeColor}
              triangle="hide"
            />
          </Popup>
          <CanvasDraw
            lazyRadius={5}
            brushRadius={4}
            className="border-2 border-secondary-dark dark:border-secondary"
            canvasWidth={600}
            canvasHeight={600}
            hideGrid={true}
            backgroundColor={canvasColor}
            catenaryColor="#282828"
            brushColor={color}
            ref={drawRef}
          />
        </div>
      </div>

      {/* Buttons */}

      <div className="flex justify-around">
        <IconButton
          type="button"
          text="Send"
          svgPath="/svg/send.svg"
          click={send}
        />
        <IconButton
          type="button"
          text="Download"
          svgPath="/svg/download.svg"
          click={download}
        />
        <IconButton
          type="button"
          text="Clear"
          svgPath="/svg/clear.svg"
          click={clear}
        />
        <IconButton
          type="button"
          text="Undo"
          svgPath="/svg/undo.svg"
          click={undo}
        />
      </div>
    </div>
  );
}
