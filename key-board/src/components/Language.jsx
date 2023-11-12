import { useState } from "react";
import Button from "./Button";
import { lang } from "../data";
import "../css/Language.css";

export default function Language(props) {
  const langNames = Object.keys(lang);
  function handleChange() {
    const langIndex = langNames.indexOf(props.currentLang);
    if (langIndex + 1 === langNames.length) {
      props.setLang(langNames[0]);
    } else {
      props.setLang(langNames[langIndex + 1]);
    }
  }
  return (
    <Button
      value={`< ${props.currentLang} >`}
      onClick={handleChange}
      className="lang-change-btn"
    />
  );
}
