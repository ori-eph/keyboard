import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Text from "./components/Text";
import Tools from "./components/Tools";

function App() {
  const [text, setText] = useState([]);
  const [color, setColor] = useState("black");
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontWeight, setFontWeight] = useState("normal");
  const [size, setSize] = useState(18);
  const [lang, setLang] = useState("eng");
  const [upper, setUpper] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Text color={color} size={size} text={text} />
      <Keyboard
        setText={setText}
        setUpper={setUpper}
        setLang={setLang}
        text={text}
        lang={lang}
        color={color}
        size={size}
        upper={upper}
        fontStyle={fontStyle}
        fontWeight={fontWeight}
      ></Keyboard>
      <Tools
        setColor={setColor}
        setSize={setSize}
        size={size}
        menu={menu}
        setMenu={setMenu}
        setFontStyle={setFontStyle}
        fontStyle={fontStyle}
        setFontWeight={setFontWeight}
        fontWeight={fontWeight}
      />
    </>
  );
}

export default App;
