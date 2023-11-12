import Size from "./Size";
import Button from "./Button";
import Color from "./Color";
import Font from "./Font";
import "../css/keyboard.css";

function Tools(props) {
  function displayMenu() {
    props.setMenu((menu) => !menu);
  }
  return (
    <>
      <Button className="key" value="style the text" onClick={displayMenu} />
      <div style={props.menu ? { display: "block" } : { display: "none" }}>
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
        />
      </div>
    </>
  );
}

export default Tools;
