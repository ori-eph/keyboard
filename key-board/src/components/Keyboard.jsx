import { useState } from "react";
import "../css/keyboard.css";
import Language from "./Language";
import Keys from "./Keys";

function Keyboard(props) {
  const currentLang = props.lang || "eng";
  return (
    <>
      <Language currentLang={currentLang} setLang={props.setLang} />
      <Keys
        color={props.color}
        size={props.size}
        lang={currentLang}
        setText={props.setText}
      />
    </>
  );
}

export default Keyboard;
