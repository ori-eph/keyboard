import { useState } from "react";
import "./App.css";
import Color from "./components/Color";
import Size from "./components/Size";
import Keyboard from "./components/Keyboard";
import Text from "./components/Text";
import Language from "./components/Language";

function App() {
  const [text, setText] = useState([]);
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(18);
  const [lang, setLang] = useState("eng");
  const [upper, setUpper] = useState(false);

  return (
    <>
      <Text color={color} size={size} text={text} />
      <Color changeColor={setColor} />
      <Size changeSize={setSize} size={size} />
      <Keyboard
        setText={setText}
        setUpper={setUpper}
        setLang={setLang}
        lang={lang}
        color={color}
        size={size}
        upper={upper}
      ></Keyboard>
    </>
  );
}

export default App;
