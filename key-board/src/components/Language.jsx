import { useState } from "react";
import Button from "./Button";
import { lang } from "../data";
import "../css/Language.css";

export default function Language(props) {
  let langNames = Object.keys(lang);
  langNames = langNames.filter((lang) => lang !== "specialChars");
  function handleChange() {
    const langIndex = langNames.indexOf(props.currentLang);
    if (langIndex + 1 === langNames.length) {
      props.setLang(langNames[0]);
    } else {
      props.setLang(langNames[langIndex + 1]);
    }
  }

  function handleSpecial() {
    props.setIsSpecial((isSpecial) => !isSpecial);
  }

  return (
    <>
      <Button
        value={`< ${props.currentLang} >`}
        onClick={handleChange}
        className="lang-change-btn"
      />
      <Button value={"!#1"} onClick={handleSpecial} className="key" />
    </>
  );
}
