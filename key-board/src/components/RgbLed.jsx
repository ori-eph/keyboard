import Button from "./Button";

function RgbLed(props) {
  function turnRgb() {
    props.setRgbOn((prev) => !prev);
  }
  return <Button value={props.rgbOn ? "on" : "off"} onClick={turnRgb} />;
}

export default RgbLed;
