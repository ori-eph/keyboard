import { useState } from "react";
import "../css/keyboard.css";
import Language from "./Language";
import Keys from "./Keys";
import UpperLower from "./UpperLower";
import Special from "./Special";
import Return from "./Return";

function Keyboard(props) {
  const currentLang = props.lang || "eng";
  const [isSpecial, setIsSpecial] = useState(false);
  const [returnArr, setReturnArr] = useState([]);
  return (
    <>
      <UpperLower
        setUpper={props.setUpper}
        upper={props.upper}
        lang={props.lang}
      />
      <Return
        setReturnArr={setReturnArr}
        returnArr={returnArr}
        setText={props.setText}
      />
      <Language
        currentLang={currentLang}
        setLang={props.setLang}
        isSpecial={isSpecial}
        setIsSpecial={setIsSpecial}
      />
      <Special setText={props.setText} />
      <Keys
        text={props.text}
        color={props.color}
        size={props.size}
        fontStyle={props.fontStyle}
        fontWeight={props.fontWeight}
        fontDecoration={props.textDecoration}
        lang={currentLang}
        setText={props.setText}
        upper={props.upper}
        isSpecial={isSpecial}
        setReturnArr={setReturnArr}
      />
    </>
  );
}

export default Keyboard;
