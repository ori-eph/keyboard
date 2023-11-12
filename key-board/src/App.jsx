import { useState } from "react";
import "./App.css";
import Color from "./components/Color";
import Size from "./components/Size";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("14px");

  return (
    <>
      <Size changeSize={setSize} />
      <p>{size}</p>
    </>
  );
}

export default App;
