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
  const [fontFam, setFontFam] = useState("system-ui");
  const [size, setSize] = useState(18);
  const [lang, setLang] = useState("eng");
  const [upper, setUpper] = useState(false);
  const [menu, setMenu] = useState(false);
  const [rgbOn, setRgbOn] = useState(false);

  return (
    <>
      <Text color={color} size={size} text={text} />
      <Keyboard
        setText={setText}
        setUpper={setUpper}
        setLang={setLang}
        setRgbOn={setRgbOn}
        text={text}
        lang={lang}
        color={color}
        size={size}
        upper={upper}
        rgbOn={rgbOn}
        fontStyle={fontStyle}
        fontWeight={fontWeight}
        fontFam={fontFam}
      ></Keyboard>
      <Tools
        setFontFam={setFontFam}
        setColor={setColor}
        setSize={setSize}
        size={size}
        menu={menu}
        setMenu={setMenu}
        setFontStyle={setFontStyle}
        fontFam={fontFam}
        fontStyle={fontStyle}
        setFontWeight={setFontWeight}
        fontWeight={fontWeight}
      />
    </>
  );
}

export default App;
