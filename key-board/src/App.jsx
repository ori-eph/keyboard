import { useState } from "react";
import "./App.css";
import Color from "./components/Color";
import Size from "./components/Size";
import Keyboard from "./components/Keyboard";
import Text from "./components/Text";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("14px");

  return (
    <>
      <Text text={text} />
      <Size changeSize={setSize} />
      <p>{size}</p>
      <Keyboard setText={setText} lang="emoj"></Keyboard>
    </>
  );
}

export default App;
