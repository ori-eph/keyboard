import Button from "./Button";
import "../css/keyboard.css";
import { fonts } from "../data";

export default function Font(props) {
  function handleFontStyleChange(e) {
    props.fontStyle !== e
      ? props.setFontStyle(e)
      : props.setFontStyle("normal");
  }

  function handleFontWeightChange(e) {
    props.fontWeight !== e
      ? props.setFontWeight(e)
      : props.setFontWeight("normal");
  }

  function handleTextDecorationChange(e) {
    props.textDecoration !== e
      ? props.setTextDecoration(e)
      : props.setTextDecoration("none");
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
        className="key fontKey"
        style={{ fontWeight: "bold" }}
        onClick={() => handleFontWeightChange("bold")}
      />
      <Button
        value="italic"
        className="key fontKey"
        style={{ fontStyle: "italic" }}
        onClick={() => handleFontStyleChange("italic")}
      />
      <Button
        value="underline"
        className="key fontKey"
        style={{ textDecoration: "underline" }}
        onClick={() => handleTextDecorationChange("underline")}
      />
    </div>
  );
}
