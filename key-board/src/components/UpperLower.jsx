import { useState } from "react";
import Button from "./Button";
import Language from "./Language";
import "../css/keyboard.css";

function UpperLower(props) {
  const symbol = { upper: "⬆", lower: "⇧" };

  function handleUpperLower() {
    props.setUpper((prev) => !prev);
  }

  //   let className = "";
  //   props.lang === "eng" ? (className = "show") : (className = "hidden");
  return (
    <Button
      value={props.upper ? symbol.upper : symbol.lower}
      onClick={handleUpperLower}
      className={`key`}
    />
  );
}

export default UpperLower;
