import { useState } from "react";
import "../css/keyboard.css";
import Language from "./Language";
import Keys from "./Keys";
import UpperLower from "./UpperLower";
import Special from "./Special";

function Keyboard(props) {
  const currentLang = props.lang || "eng";
  const [isSpecial, setIsSpecial] = useState(false);
  return (
    <>
      <UpperLower setUpper={props.setUpper} upper={props.upper} />
<<<<<<< HEAD
      <Language
        currentLang={currentLang}
        setLang={props.setLang}
        isSpecial={isSpecial}
        setIsSpecial={setIsSpecial}
      />
=======
      <Language currentLang={currentLang} setLang={props.setLang} />
      <Special setText={props.setText} />
>>>>>>> df3c1e97312bfb2e0208583dc824207b341d8d11
      <Keys
        color={props.color}
        size={props.size}
        lang={currentLang}
        setText={props.setText}
        upper={props.upper}
        isSpecial={isSpecial}
      />
    </>
  );
}

export default Keyboard;
