import { useState } from "react";
import { lang } from "../data";
import Button from "./Button";
import "../css/keyboard.css";

let count = 0;

function Keyboard(props) {
  const style = {
    color: props.color || "black",
    fontSize: props.size + "px" || "14px",
  };

  function findLangChars(currentLang) {
    for (const key in lang) {
      if (key === currentLang) {
        return lang[key];
      }
    }
  }

  function onKeyClick(setText, char) {
    setText((prevText) => [
      ...prevText,
      <span key={`${count}-${char}`} style={style}>
        {char}
      </span>,
    ]);
    count++;
    console.log(count);
  }

  function getKeyboard(chars, setText) {
    const keyboard = chars.map((char) => (
      <Button
        key={`key-${char}`}
        onClick={() => onKeyClick(setText, char)}
        value={char}
        className="key"
      ></Button>
    ));
    return keyboard;
  }

  const currentLang = props.lang || "eng";
  const chars = findLangChars(currentLang);
  const keyboard = getKeyboard(chars, props.setText);

  return <div id="keyboard-flex">{keyboard}</div>;
}

export default Keyboard;
