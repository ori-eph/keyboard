import { useState } from "react";
import "../css/keyboard.css";
import Language from "./Language";
import Keys from "./Keys";
import UpperLower from "./UpperLower";
import Special from "./Special";
import Return from "./Return";
import RgbLed from "./RgbLed";

function Keyboard(props) {
  const currentLang = props.lang || "eng";
  const [isSpecial, setIsSpecial] = useState(false);
  const [returnArr, setReturnArr] = useState([]);

  return (
    <>
      <RgbLed rgbOn={props.rgbOn} setRgbOn={props.setRgbOn} />
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
        textDecoration={props.textDecoration}
        fontFam={props.fontFam}
        lang={currentLang}
        setText={props.setText}
        upper={props.upper}
        isSpecial={isSpecial}
        setReturnArr={setReturnArr}
        rgbOn={props.rgbOn}
      />
    </>
  );
}

export default Keyboard;
