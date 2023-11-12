import { useState } from "react";
import Button from "./Button";

function UpperLower(props) {
  const symbol = { upper: "⬆", lower: "⇧" };

  function handleUpperLower() {
    props.setUpper((prev) => !prev);
  }

  return (
    <Button
      value={props.upper ? symbol.upper : symbol.lower}
      onClick={handleUpperLower}
      className="key"
    />
  );
}

export default UpperLower;
