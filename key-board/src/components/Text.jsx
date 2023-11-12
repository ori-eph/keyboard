import { useState } from "react";

function Text(props) {
  const text = props.text || "";

  return <div>{text}</div>;
}

export default Text;
