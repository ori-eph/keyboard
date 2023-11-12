// import { useState } from "react";

function Text(props) {
  const text = props.text || "";

  return <div className="textBox">{text}</div>;
}

export default Text;
