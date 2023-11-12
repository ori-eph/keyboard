// import { useState } from "react";
import { lang } from "../data";
import Button from "./Button";
import "../css/keyboard.css";
// import Language from "./Language";

let count = 0;

function Keys(props) {
  const moreChars = [",", "space", ".", "⌫"];
  const style = {
    color: props.color || "black",
    fontSize: props.size + "px" || "18px",
    fontStyle: props.fontStyle || "normal",
    fontWeight: props.fontWeight || "normal",
  };

  function findLangChars(currentLang) {
    for (const key in lang) {
      if (key === currentLang) {
        return lang[key];
      }
    }
  }

  function onKeyClick(setText, char) {
    if (char === "⌫") {
      props.setReturnArr((prev) => [
        ...prev,
        { action: "delete", deletedText: props.text[props.text.length - 1] },
      ]);
      setText((prev) => {
        return [...prev].slice(0, -1);
      });
    } else if (char !== "space") {
      props.setReturnArr((prev) => [...prev, { action: "add" }]);
      setText((prevText) => {
        return [
          ...prevText,
          <span key={`${count}-${char}`} style={style}>
            {char}
          </span>,
        ];
      });
    } else {
      setText((prevText) => {
        props.setReturnArr((prev) => [...prev, { action: "add" }]);
        return [
          ...prevText,
          <span key={`${count}-space`} style={style}>
            &nbsp;
          </span>,
        ];
      });
    }
    count++;
  }

  function getKeyboard(chars, setText) {
    const keyboard = chars.map((char) => {
      let charFixed =
        props.lang === "eng"
          ? props.upper
            ? char.toUpperCase()
            : char.toLowerCase()
          : char;
      return (
        <Button
          key={`key-${char}`}
          onClick={() => onKeyClick(setText, charFixed)}
          value={charFixed}
          className="key"
        ></Button>
      );
    });
    return keyboard;
  }

  function getSpaceLine(setText) {
    const more = moreChars.map((char) => {
      let value, isSpace;
      char !== "space" ? (value = char) : (value = "");
      char === "space" ? (isSpace = " space") : (isSpace = "");
      return (
        <Button
          key={`key-${char}`}
          onClick={() => onKeyClick(setText, char)}
          value={value}
          className={`key${isSpace}`}
        ></Button>
      );
    });
    return more;
  }

  const currentLang = props.isSpecial ? "specialChars" : props.lang;
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

export default Keys;
