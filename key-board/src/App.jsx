import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Text from "./components/Text";
import Tools from "./components/Tools";

function App() {
  const [text, setText] = useState([]);
  const [color, setColor] = useState("black");
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
        lang={lang}
        color={color}
        size={size}
        upper={upper}
      ></Keyboard>
      <Tools
        setColor={setColor}
        setSize={setSize}
        size={size}
        menu={menu}
        setMenu={setMenu}
      />
    </>
  );
}

export default App;
