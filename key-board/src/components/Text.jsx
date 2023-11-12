import { useState } from "react";

function Text(props) {
  const style = {
    color: props.color || "black",
    fontSize: props.size || "14px",
  };

  return <p style={style}>{text}</p>; //hi
}

export default Text;
