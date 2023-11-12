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

  function handleFontFamChange(e) {
    props.setFontFam(e.target.value);
  }

  return (
    <div className="Font">
      <Button
        value="bold"
        className="key"
        style={{ fontWeight: "bold" }}
        onClick={() => handleFontWeightChange("bold")}
      />
      <Button
        value="italic"
        className="key"
        style={{ fontStyle: "italic" }}
        onClick={() => handleFontStyleChange("italic")}
      />
      <label htmlFor="fontFam">font:</label>
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
    </div>
  );
}
