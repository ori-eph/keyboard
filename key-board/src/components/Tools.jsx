import Size from "./Size";
import Button from "./Button";
import Color from "./Color";

function Tools(props) {
  function displayMenu() {
    props.setMenu((menu) => !menu);
  }
  return (
    <>
      <Button className="key" value="style the text" onClick={displayMenu} />
      <div style={props.menu ? { display: "block" } : { display: "none" }}>
        <h2>Styling tools</h2>
        <Size sizes={props.size} setSize={props.setSize} />
        <Color setColor={props.setColor} />
      </div>
    </>
  );
}

export default Tools;
