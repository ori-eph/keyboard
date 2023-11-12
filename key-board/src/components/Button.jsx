import { useState } from "react";

function Button(props) {
  return (
    <button
      className={props.className ? props.className : ""}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Button;
