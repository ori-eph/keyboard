import { useState } from "react";
import "./App.css";
import Color from "./components/Color";
import Size from "./components/Size";
import Keyboard from "./components/Keyboard";
import Text from "./components/Text";

function App() {
  const [text, setText] = useState([]);
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("14px");

  return (
    <>
      <Text color={color} size={size} text={text} />
      <Color changeColor={setColor} />
      <Size changeSize={setSize} />
      <p>{`${size}, ${color}`}</p>
      <Keyboard
        setText={setText}
        lang="eng"
        color={color}
        size={size}
      ></Keyboard>
    </>
  );
}

export default App;
