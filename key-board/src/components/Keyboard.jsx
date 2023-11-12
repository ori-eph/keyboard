import { useState } from "react";
import "../css/keyboard.css";
import Language from "./Language";
import Keys from "./Keys";
import UpperLower from "./UpperLower";

function Keyboard(props) {
  const currentLang = props.lang || "eng";
  return (
    <>
      <UpperLower setUpper={props.setUpper} upper={props.upper} />
      <Language currentLang={currentLang} setLang={props.setLang} />
      <Keys
        color={props.color}
        size={props.size}
        lang={currentLang}
        setText={props.setText}
        upper={props.upper}
      />
    </>
  );
}

export default Keyboard;
