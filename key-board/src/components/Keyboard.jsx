import { useState } from "react";
import { lang } from "../data";
import Button from "./Button";
import "../css/keyboard.css";

let count = 0;

function Keyboard(props) {
  const moreChars = [",", "space", "."];
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
    if (char !== "space") {
      setText((prevText) => [
        ...prevText,
        <span key={`${count}-${char}`} style={style}>
          {char}
        </span>,
      ]);
    } else {
      setText((prevText) => [
        ...prevText,
        <span key={`${count}-space`} style={style}>
          &nbsp;
        </span>,
      ]);
    }
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

  function getSpaceLine(setText) {
    const more = moreChars.map((char) => (
      <Button
        key={`key-${char}`}
        onClick={() => onKeyClick(setText, char)}
        value={char}
        className="key"
      ></Button>
    ));
    return more;
  }

  const currentLang = props.lang || "eng";
  const chars = findLangChars(currentLang);
  const keyboard = getKeyboard(chars, props.setText);
  const spaceLine = getSpaceLine(props.setText);

  return (
    <>
      <div id="keyboard-flex">{keyboard}</div>
      <div id="space-line">{spaceLine}</div>
    </>
  );
}

export default Keyboard;
