import Button from "./Button";
import "../css/keyboard.css";
import { fonts } from "../data";
import { useState } from "react";

export default function Font(props) {
  const [styleB, setStyleB] = useState("");
  const [styleI, setStyleI] = useState("");
  const [styleU, setStyleU] = useState("");

  function handleFontStyleChange(e) {
    if (props.fontStyle !== e) {
      props.setFontStyle(e);
      setStyleI(" pressed");
    } else {
      props.setFontStyle("normal");
      setStyleI("");
    }
  }

  function handleFontWeightChange(e) {
    if (props.fontWeight !== e) {
      props.setFontWeight(e);
      setStyleB(" pressed");
    } else {
      props.setFontWeight("normal");
      setStyleB("");
    }
  }

  function handleTextDecorationChange(e) {
    if (props.textDecoration !== e) {
      setStyleU(" pressed");
      props.setTextDecoration(e);
    } else {
      props.setTextDecoration("none");
      setStyleU("");
    }
  }

  function handleFontFamChange(e) {
    props.setFontFam(e.target.value);
  }
  return (
    <div className="Font tool">
      <label htmlFor="fontFam">font: &nbsp;</label>
      <select
        name="fontFam"
        id="fontFam"
        onChange={(e) => handleFontFamChange(e)}
      >
        {fonts.map((font) => (
          <option value={font} key={font}>
            {font}
          </option>
        ))}
      </select>
      <br />
      <br />
      <Button
        value="bold"
        className={`key fontKey bold${styleB}`}
        onClick={() => handleFontWeightChange("bold")}
      />
      <Button
        value="italic"
        className={`key fontKey italic${styleI}`}
        onClick={() => handleFontStyleChange("italic")}
      />
      <Button
        value="underline"
        className={`key fontKey underline${styleU}`}
        onClick={() => handleTextDecorationChange("underline")}
      />
    </div>
  );
}
