import Size from "./Size";
import Button from "./Button";
import Color from "./Color";
import Font from "./Font";
import "../css/keyboard.css";
import { useState } from "react";

function Tools(props) {
  const [toolIcon, setToolIcon] = useState("🎨");
  function displayMenu() {
    props.setMenu((menu) => !menu);
  }
  return (
    <div className="tools-div">
      <Button className="key tool-btn" value={toolIcon} onClick={displayMenu} />
      <div
        style={props.menu ? { display: "block" } : { display: "none" }}
        className="tools"
      >
        <h2>Styling tools</h2>
        <Size size={props.size} setSize={props.setSize} />
        <Color setColor={props.setColor} />
        <Font
          fontFam={props.fontFam}
          fontStyle={props.fontStyle}
          fontWeight={props.fontWeight}
          setFontFam={props.setFontFam}
          setFontStyle={props.setFontStyle}
          setFontWeight={props.setFontWeight}
          textDecoration={props.textDecoration}
          setTextDecoration={props.setTextDecoration}
        />
      </div>
    </div>
  );
}

export default Tools;
