import Button from "./Button";
import React from "react";
function Special(props) {
  function upperCaseAll() {
    props.setText((prev) =>
      [...prev].map((span) =>
        React.cloneElement(span, {}, span.props.children.toUpperCase())
      )
    );
  }
  function lowerCaseAll() {
    props.setText((prev) =>
      [...prev].map((span) =>
        React.cloneElement(span, {}, span.props.children.toLowerCase())
      )
    );
  }
  function clearText() {
    props.setText((prev) => []);
  }
  return (
    <div>
      <Button value={"⬆ALL"} onClick={upperCaseAll} />
      <Button value={"⇩ALL"} onClick={lowerCaseAll} />
      <Button value={"🧹"} onClick={clearText} />
    </div>
  );
}

export default Special;
