import Button from "./Button";

function RgbLed(props) {
  function turnRgb() {
    props.setRgbOn((prev) => !prev);
  }
  return (
    <Button
      className="key"
      value={props.rgbOn ? "on" : "off"}
      onClick={turnRgb}
    />
  );
}

export default RgbLed;
