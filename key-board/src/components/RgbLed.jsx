import Button from "./Button";

function RgbLed(props) {
  let style = props.rgbOn ? "green-key" : "red-key";
  function turnRgb() {
    props.setRgbOn((prev) => !prev);
  }

  return (
    <Button
      className={`topKey ledKey ${style}`}
      // value={props.rgbOn ? "on" : "off"}
      onClick={turnRgb}
    />
  );
}

export default RgbLed;
